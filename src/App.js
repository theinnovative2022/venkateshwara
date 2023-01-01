import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import News from "./components/news/News";
import Schemes from "./components/schemes/Schemes";
import Services from "./components/allservice/Services";
import View from "./components/viewcommerce/View";
import Footer from "./components/footer/Footer";
import Achievements from "./components/Achievements";
import Search from "./components/search/Search";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Profile from "./components/Profile";
import AllSchemes from "./components/schemes/AllSchemes";
import Schemes1 from "./components/schemes/Schemes1";

function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<><Home/><Footer/></>}></Route>
        <Route path="/about" element={<><About/><Footer/></>}></Route>
        <Route path="/news" element={<><News/><Footer/></>}></Route>
        <Route path="/contact" element={<><Contact/><Footer/></>}></Route>
        <Route path="/services/ecommerce">
          <Route path="/services/ecommerce/" element={<><Services/><Footer/></>}></Route>
          <Route path="/services/ecommerce/view" element={<><View/><Footer/></>}></Route>
        </Route>
        <Route path="/achievements" element={<><Achievements/><Footer/></>}></Route>
        <Route path="/login" element={<><Login/><Footer/></>}></Route>
        <Route path="/register" element={<><Signup/><Footer/></>}></Route>
        <Route path="/schemes" element={<><Schemes/><Footer/></>}></Route>
        <Route path="/allschemes" element={<><AllSchemes/><Footer/></>}/>
        <Route path="/scheme1/:id" element={<><Schemes1/><Footer/></>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="*" element={<h1 className="container">404 Not Found</h1>}></Route>
      </Routes>
      {/* <About></About> */}
    </BrowserRouter>
  )
}

export default App;
