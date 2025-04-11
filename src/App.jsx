import React, {useState} from 'react'
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
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ProductZoom } from './components/ProductZoom'
import { IoClose } from "react-icons/io5";
import { ProductDetailsComponent } from './components/ProductDetails'
import Login from './Pages/Login'
import Register from './Pages/Register'



const MyContext = createContext();

function App() {


  const [openProductDetailsModel, setOpenProductDetailsModel] = useState(false);
  const [maxWidth] = useState('lg');
  const [fullWidth] = useState(true);

  const handleCloseProductDetailsModel = () => {
    setOpenProductDetailsModel(false);
  };
  const values = {
    setOpenProductDetailsModel
  }
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
          </Routes>
          <Footer />

        </MyContext.Provider>
      </BrowserRouter>


      <Dialog
        open={openProductDetailsModel}
        fullWidth={fullWidth}
        maxWidth = {maxWidth}
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
              <IoClose className='text-[20px]'/>
              
            </Button>
            <div className="col1 w-[40%]  !px-3">
              <ProductZoom/>
            </div>

            <div className='col2 w-[60%] !py-8 !px-8 !pr-16 productContent'>
              <ProductDetailsComponent/>
            </div>
          </div>
        </DialogContent>
        
      </Dialog>

    </>
  );
}

export default App;


export {MyContext}