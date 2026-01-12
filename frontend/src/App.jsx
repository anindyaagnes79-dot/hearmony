import { useState } from "react";
import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import MerchCatalog from "./components/MerchCatalog";
import ReservationForm from "./components/ReservationForm";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

// URL backend
export const backendUrl = "http://localhost:4000";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />
      <Routes>
        <Route path="/" element={<HomeContent />}/>
        <Route path="/reservation" element={<ReservationForm />}/>
        <Route path="/merchandise" element={<MerchCatalog />}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
