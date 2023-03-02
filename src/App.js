import {useState, useEffect} from "react";
import {Route, Routes} from "react-router-dom"

import "./scss/app.scss"
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileApp from "./components/MobileApp";
import PostFooter from "./components/PostFooter";
import Home from "./pages/Home";
import CartPopup from "./components/CartPopup";
import Cart from "./pages/Cart";


function App() {

    const [showCartPopup, setShowCartPopup] = useState(false)

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

    const closeCart = () => {
        setShowCartPopup(false)
    }

  return (
      <div className="wrapper">
          {showCartPopup? <CartPopup closeCart={closeCart}/>  : null  }
          <Header onClickCart={() => setShowCartPopup(true)} />
        <div className="content">
          <div className="container">
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/cart" element={<Cart/>}/>}/>
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
