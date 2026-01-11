import { useEffect } from "react";

function ReservationForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    script.onload = () => {
      window.jotformEmbedHandler(
        "iframe[id='JotFormIFrame-260093924222452']",
        "https://form.jotform.com/"
      );
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white pt-[80px] pb-40">
      <div className="max-w-5xl mx-auto">
        <iframe
          id="JotFormIFrame-260093924222452"
          title="HEARMONY RESERVATION"
          src="https://form.jotform.com/260093924222452"
          className="w-full border-none"
          style={{ minHeight: "900px" }}
        />
      </div>
    </section>
  );
}

export default ReservationForm;
