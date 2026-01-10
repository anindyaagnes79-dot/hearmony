import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import Footer from "./components/Footer";


export const backendUrl = 'http://localhost:4000'

function App() {
  return (
    <>
      <Navbar />
      <HomeContent />
      <Footer />
    </>
  );
}

export default App;
