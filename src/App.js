import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Cart, FrontPage, FullStore, ProductDetails, UserProfile } from "./pages";

const App = () => {

  return (
    <div className="bg-background">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/store" element={<FullStore />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/productDetails" element={<ProductDetails />} />
            <Route path="/*" element={<FrontPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
