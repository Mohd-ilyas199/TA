import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Components/Counter/LandingCount';
import LandingCount from './Components/Counter/LandingCount';
// import Landing from './Components/CRUD/Landing';
  // import {Login} from './Components/JK/Login';
// import { MainLanding } from './Components/MainLanding';
// import { RegistrationForm } from './Components/FormRegistration';
// import React, { useEffect } from 'react';
// import { Provider } from 'react-redux';
// import Home from './Components/Home';
// import { ConfigStore } from './Components/Store/ConfigStore';
// import { getProduct } from "./Components/Service/product"



function App() {
  // const localStore = ConfigStore();
  // const allproduct = async () => {
  //   const products = await getProduct();
  //   console.log("product--->", products)

  // }

  // useEffect(() => {
  //   allproduct();
  // }, [])

  return (
    <div >
      {/* <Provider store={localStore}>
        <Home />
        {/* <ProductItem /> */}
{/* <RegistrationForm /> */}
{/* <Login /> */}
{/* <MainLanding /> */}
{/* <Landing />       */}
<LandingCount />
    </div>
  );
}

export default App;