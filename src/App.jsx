import React, {  useEffect, useState } from 'react'
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
import { ProductDetailsComponent } from './components/ProductDetails'
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


const MyContext = createContext();

function App() {


  const [openProductDetailsModel, setOpenProductDetailsModel] = useState(false);
  const [maxWidth] = useState('lg');
  const [fullWidth] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
 

  const [openCartPanel, setOpenCartPanel] = useState(false);


  const handleCloseProductDetailsModel = () => {
    setOpenProductDetailsModel(false);
  };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };


  useEffect(()=>{
    const token = localStorage.getItem('accesstoken');

    if(token !== undefined && token !== null && token !== ""){
      setIsLogin(true);
    }else{
      setIsLogin(false);
    }
  },[isLogin])

  const openAlertBox = (status, msg) => {
    if (status === 'success') {
      toast.success(msg);
    }
    if (status === 'error') {
      toast.error(msg);
    }
  };

  
  const values = {
    setOpenProductDetailsModel,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin
   
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
          </Routes>
          <Footer />

        </MyContext.Provider>
      </BrowserRouter>

      


      <Dialog
        open={openProductDetailsModel}
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
            <div className="col1 w-[40%]  !px-3">
              <ProductZoom />
            </div>

            <div className='col2 w-[60%] !py-8 !px-8 !pr-16 productContent'>
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>

      </Dialog>

      <Toaster />





    </>
  );
}

export default App;


export { MyContext }