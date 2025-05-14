import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import ProductListing from './Pages/ProductListing';
import { ProductDetails } from './Pages/ProductDetails'
import { createContext } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { ProductZoom } from './components/ProductZoom'
import { IoClose } from "react-icons/io5";
import Login from './Pages/Login';
import Register from './Pages/Register';
import CartPage from './Pages/Cart';
import Verify from './Pages/Verify';
import ForgotPassword from './Pages/ForgotPassword';
import Checkout from './Pages/Checkout';
import toast, { Toaster } from 'react-hot-toast';
import MyAccount from './Pages/MyAccount'
import MyList from './Pages/MyList'
import Orders from './Pages/Orders'
import { fetchDataFromApi, postData } from './utils/api'
import ImageRecognition from './components/ImageRecognition/imageRecognition'
import ProductDetailsComponent from './components/ProductDetails'


const MyContext = createContext();

function App() {


  const [openProductDetailsModel, setOpenProductDetailsModel] = useState({
    open: false,
    item: {},
  });
  const [maxWidth] = useState('lg');
  const [fullWidth] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [catData, setCatData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [cartData, setCartData] = useState([]);

  const [openCartPanel, setOpenCartPanel] = useState(false);



  const handleOpenProductDetailsModel = (status, item) => {
    setOpenProductDetailsModel({
      open: status,
      item: item
    });

  };

  const handleCloseProductDetailsModel = () => {
    setOpenProductDetailsModel({
      open: false,
      item: {}
    });

  };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };


  useEffect(() => {
    const token = localStorage.getItem('accesstoken');

    if (token !== undefined && token !== null && token !== "") {
      setIsLogin(true);

      fetchDataFromApi(`/api/user/user-details?token=${token}`).then((res) => {

        setUserData(res.data);

        if (res?.response?.data?.message === "You have not login") {
          localStorage.removeItem("accesstoken");
          localStorage.removeItem("refreshtoken");
          openAlertBox("error", "your session is closed please login again");

          setIsLogin(false);
        }


      })

      getCartItems();

    } else {
      setIsLogin(false);
    }
  }, [isLogin])




  useEffect(() => {
    fetchDataFromApi("/api/category").then((res) => {
      if (res?.error === false) {
        setCatData(res?.data);
      }
    })
  }, []);


  const openAlertBox = (status, msg) => {
    if (status === 'success') {
      toast.success(msg);
    }
    if (status === 'error') {
      toast.error(msg);
    }
  };

  const addToCart = (product, userId, quantity) => {

    if (userId === undefined) {
      openAlertBox("error", "you are not login! please login first");
      return false;
    }
    const data = {
      productTitle: product?.name,
      image: product?.images[0],
      rating: product?.rating,
      price: product?.price,
      quantity: quantity,
      subTotal: parseInt(product?.price * quantity),
      productId: product?._id,
      userId: userId,
    }

    postData("/api/cart/add", data).then((res) => {
      if (res?.error === false) {
        openAlertBox("success", res?.message);
        getCartItems();

      } else {
        openAlertBox("error", res?.message);
      }
    })


  }

  const getCartItems = () => {
    const token = localStorage.getItem('accesstoken');

    if (token !== undefined && token !== null && token !== "") {
      fetchDataFromApi(`/api/cart/get?token=${token}`).then((res) => {
        if (res?.error === false) {
          setCartData(res?.data);
        }
      })
    }
  }


  const values = {
    setOpenProductDetailsModel,
    handleOpenProductDetailsModel,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin,
    userData,
    setUserData,
    catData,
    setCatData,
    productData,
    setProductData,
    addToCart,
    cartData,

  };



  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={'/'} exact={true} element={<Home />} />
            <Route
              path={'/productListing'}
              exact={true}
              element={<ProductListing />} />

            <Route
              path={'/product/:id'}
              exact={true}
              element={<ProductDetails />} />

            <Route
              path={'/login'}
              exact={true}
              element={<Login />} />

            <Route
              path={'/register'}
              exact={true}
              element={<Register />} />

            <Route
              path={'/cart'}
              exact={true}
              element={<CartPage />} />

            <Route
              path={'/verify'}
              exact={true}
              element={<Verify />} />

            <Route
              path={'/forgot-password'}
              exact={true}
              element={<ForgotPassword />} />

            <Route
              path={'/checkout'}
              exact={true}
              element={<Checkout />} />

            <Route
              path={'/my-account'}
              exact={true}
              element={<MyAccount />} />

            <Route
              path={'/my-list'}
              exact={true}
              element={<MyList />} />

            <Route
              path={'/my-orders'}
              exact={true}
              element={<Orders />} />

            <Route
              path="/image-recognition"
              element={<ImageRecognition />} />

          </Routes>
          <Footer />

          <Dialog
            open={openProductDetailsModel.open}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            onClose={handleCloseProductDetailsModel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className='productDetailsModel'
          >

            <DialogContent>
              <div className='flex items-center w-full productDetailsModelContainer relative'>
                <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]
            !absolute !top-[15px] !right-[15px] !bg-[#f1f1f1]'
                  onClick={handleCloseProductDetailsModel}>
                  <IoClose className='text-[20px]' />

                </Button>

                {
                  openProductDetailsModel?.item?.length !== 0 &&
                  <>
                    <div className="col1 w-[40%]  !px-3">
                      <ProductZoom images={openProductDetailsModel?.item?.images} />
                    </div>

                    <div className='col2 w-[60%] !py-8 !px-8 !pr-16 productContent'>
                      <ProductDetailsComponent data={openProductDetailsModel?.item} />
                    </div>
                  </>
                }

              </div>
            </DialogContent>

          </Dialog>

        </MyContext.Provider>
      </BrowserRouter>






      <Toaster />





    </>
  );
}

export default App;


export { MyContext }