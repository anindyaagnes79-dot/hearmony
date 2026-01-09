import { useState } from "react";
import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import MerchCatalog from "./components/MerchCatalog";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {/* Navbar */}
      <Navbar setPage={setPage} />

      {/* Konten utama */}
      <div>
        {page === "home" && (
          <>
            <HomeContent setPage={setPage} />
          </>
        )}

        {page === "merch" && <MerchCatalog />}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
