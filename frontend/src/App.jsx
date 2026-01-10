import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import HomeContent from "./components/HomeContent";
import MerchSlider from "./components/MerchSlider";
import Footer from "./components/Footer";
import {toast} from "react-toastify";


export const backendUrl = 'http://localhost:4000'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <HomeContent />
      <MerchSlider />
      <Footer />
    </>
  );
}

export default App;
