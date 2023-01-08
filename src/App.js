import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
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
import Profile from "./components/userprofile/Profile";
import EditProfile from "./components/userprofile/EditProfile";
import FreeListing from "./components/userprofile/FreeListing";
import Advertise from "./components/userprofile/Advertise";
import MyGrievance from "./components/userprofile/grievane/MyGrievance";
import Register from "./components/userprofile/grievane/Register";
import TrackGrievance from "./components/userprofile/grievane/TrackGrievance";
import Help from "./components/userprofile/grievane/Help";
import AllSchemes from "./components/schemes/AllSchemes";
import Schemes1 from "./components/schemes/Schemes1";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route index element={<><Home /><Footer /></>}></Route>
        <Route path="/about" element={<><About /><Footer /></>}></Route>
        <Route path="/news" element={<><News /><Footer /></>}></Route>
        <Route path="/contact" element={<><Contact /><Footer /></>}></Route>
        <Route path="/services/ecommerce">
          <Route path="/services/ecommerce/" element={<><Services /><Footer /></>}></Route>
          <Route path="/services/ecommerce/view" element={<><View /><Footer /></>}></Route>
        </Route>
        <Route path="/achievements" element={<><Achievements /><Footer /></>}></Route>
        <Route path="/login" element={<><Login /><Footer /></>}></Route>
        <Route path="/register" element={<><Signup /><Footer /></>}></Route>
        <Route path="/schemes" element={<><Schemes /><Footer /></>}></Route>
        <Route path="/allschemes" element={<><AllSchemes /><Footer /></>} />
        <Route path="/scheme1/:id" element={<><Schemes1 /><Footer /></>}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/profile/edit" element={<EditProfile />}></Route>
        <Route path="/profile/freelisting" element={<FreeListing />}></Route>
        <Route path="/profile/advertise" element={<Advertise />}></Route>
        <Route path="/profile/mygrievance" element={<MyGrievance />}></Route>
        <Route path="/profile/registergrievance" element={<Register />}></Route>
        <Route path="/profile/trackgrievance" element={<TrackGrievance />}></Route>
        <Route path="/profile/help" element={<Help />}></Route>
        <Route path="*" element={<h1 className="container">404 Not Found</h1>}></Route>
      </Routes>
      {/* <About></About> */}
    </BrowserRouter>
  )
}

export default App;
