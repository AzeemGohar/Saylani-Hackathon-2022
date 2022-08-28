import Navbar from "../src/components/navigation/navbar.component";
import SignUp from "./components/Auth/signup.auth";
import Carousel from "./components/carousel/carousel.component";
import SignIn from "./components/Auth/signIn.auth";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard.component";
import Addpost from "./components/dashboard/addpost.component";
import Home from "./components/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Carousel />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Addpost" element={<Addpost />} />
      </Route>
    </Routes>
  );
};

export default App;
