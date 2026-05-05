import "./App.css";
import { Routes, Route } from "react-router-dom";
import DemoBanner from "./components/common/DemoBanner";
import AssetDetail from "./pages/AssetDetail.jsx";
import Explore from "./pages/Explore.jsx";
import Home from "./pages/Home.jsx";
import Learn from "./pages/Learn.jsx";
import Profile from "./pages/Profile.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";

function App() {
  return (
    <>
      <DemoBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/asset/:id" element={<AssetDetail />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </>
  );
}

export default App;
