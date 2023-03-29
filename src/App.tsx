import {useEffect} from "react";
import {Route, Routes} from "react-router-dom"

import "./scss/app.scss"
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileApp from "./components/MobileApp";
import PostFooter from "./components/PostFooter";
import Home from "./pages/Home";
import CartPopup from "./components/CartPopup";
import Cart from "./pages/Cart";
import {useSelector} from "react-redux";


function App() {

    const showCartPopup = useSelector((state) => state.cart.cartPopup)

    useEffect(() => {
        if (showCartPopup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showCartPopup]);

  return (
      <div className="wrapper">
          {showCartPopup? <CartPopup/>  : null  }
          <Header/>
        <div className="content">
          <div className="container">
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/cart" element={<Cart/>}/>
              </Routes>
          </div>
        </div>
          <MobileApp/>
          <Footer/>
          <PostFooter/>
    </div>
  );
}

export default App;
