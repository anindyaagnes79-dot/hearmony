import Component1 from "../assets/Component 1.png";
import Component2 from "../assets/Component 2.png";
import Group1000003533 from "../assets/Group 1000003533.png";
import LOGO from "../assets/LOGO.png";
import tanganhijau from "../assets/tanganhijau.png";
import Vector103 from "../assets/Vector 103.png";
import Vector104 from "../assets/Vector 104.png";
import Vector112 from "../assets/Vector 112.png";
import Vector118 from "../assets/Vector 118.png";
import Vector135 from "../assets/Vector 135.png";
import Vector136 from "../assets/Vector 136.png";
import Vector137 from "../assets/Vector 137.png";
import Vector92 from "../assets/Vector 92.png";
import Vector96 from "../assets/Vector 96.png";
import Booth from "../assets/booth.avif";
import BgTxt2 from "../assets/bg texture 2.png";

function HomeContent() {
  return (
    <>
      <div className="nonheader">
        <div className="transition"></div>
        <div className="booth">
          <h1>Our Booth</h1>
          <div className="elements">
            <div className="element1">
              <img id="el1" src={Vector137} alt="element" />
            </div>
            <div className="element2">
              <img id="el2" src={Component2} alt="element" />
            </div>
            <div className="element3">
              <img id="el3" src={Vector103} alt="element" />
            </div>
            <div className="element4">
              <img id="el4" src={Vector104} alt="element" />
            </div>
            <div className="element5">
              <img id="el5" src={Component1} alt="element" />
            </div>
            <div className="element6">
              <img id="el6" src={Vector92} alt="element" />
            </div>
            <div className="element8">
              <img id="el8" src={Vector135} alt="element" />
            </div>
            <div className="element9">
              <img id="el9" src={Vector136} alt="element" />
            </div>
            <div className="element10">
              <img id="el10" src={Vector112} alt="element" />
            </div>
          </div>
          <div className="element7">
            <img id="el7" src={tanganhijau} alt="element" />
          </div>
          <div className="element11">
            <img id="bgtexture" src={BgTxt2} alt="element" />
            <img id="bgtexture" src={BgTxt2} alt="element" />
          </div>
          <div className="boothcontent">
            <div className="booth1">
              <div className="booth1text">
                <h2>Mental Health</h2>
                <h4>bla bla bla</h4>
              </div>
              <div className="booth1image">
                <img id="booth1" src={Booth} alt="booth" />
              </div>
            </div>
            <div className="booth2">
              <div className="booth2image">
                <img id="booth" src={Booth} alt="booth" />
              </div>
              <div className="booth2text">
                <h2>Behind The Program</h2>
                <h4>bla bla bla</h4>
              </div>
            </div>
            <div className="booth3">
              <div className="booth3text">
                <h2>Interactive Games</h2>
                <h4>bla bla bla</h4>
              </div>
              <div className="booth3image">
                <img id="booth" src={Booth} alt="booth" />
              </div>
            </div>
          </div>
          <div className="performance">
            <h1>Our Performance?!</h1>
            <h2>Stay Tuned!</h2>
          </div>
        </div>
        <div className="reservation">
          <h2>25 January 2026</h2>
          <h4>Grab your reservation!!</h4>
          <a>RESERVATION</a>
        </div>
      </div>

      <style jsx>{`
        .nonheader h1 {
          font-size: 56px;
          color: #f7d154;
          position: relative;
          z-index: 2;
        }
        .nonheader h2 {
          font-size: 44px;
          color: #f7d154;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
        }
        .nonheader h4 {
          font-size: 29px;
          letter-spacing: 2px;
        }
        .nonheader {
          color: white;
          font-family: "Perandory-semi-condensed";
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
          background: linear-gradient(
            135deg,
            #3a7d1e,
            #005f34,
            #004c97,
            #102a44
          );
        }

        .transition {
          background: linear-gradient(
            to right,
            rgba(240, 138, 36, 0.9),
            rgba(247, 209, 84, 0.9),
            rgba(240, 138, 36, 0.9)
          );
          margin: 0px;
          margin-bottom: 20px;
          padding: 10px 0px;
          position: relative;
          z-index: 2;
        }
        .transition #bgtexture {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
          opacity: 0.3;
        }

        .booth {
          position: relative;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 80px 40px;
          max-width: 1000px;
          margin: auto;
          position: relative;
        }
        .booth h1 {
          text-align: center;
          margin-bottom: 80px;
          font-size: 76px;
          text-transform: capitalize;
          font-weight: bold;
          letter-spacing: 5px;
        }
        .booth h2 {
          font-size: 44px;
          margin-bottom: 10px;
          font-weight: bold;
          letter-spacing: 3px;
        }
        .booth h4 {
          font-size: 24px;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }
        .boothcontent img {
          border: 5px solid #f08a24;
        }
        .booth img {
          width: 400px;
          height: 400px;
          border-radius: 10px;
          transition: transform 0.5s ease;
        }
        .booth1 {
          position: relative;
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 80px;
          z-index: 2;
          padding: 0px;
          background-color: rgba(240, 138, 36, 0.15);
          border-radius: 10px;
          border: 4px solid #f08a24;
        }
        .booth2 {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          margin-bottom: 80px;
          z-index: 2;
          padding: 0px;
          background-color: rgba(240, 138, 36, 0.15);
          border-radius: 10px;
          border: 4px solid #f08a24;
        }
        .booth3 {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          margin-bottom: 80px;
          z-index: 2;
          background-color: rgba(240, 138, 36, 0.15);
          border-radius: 10px;
          border: 4px solid #f08a24;
        }
        .booth1text {
          flex: 1;
        }
        .booth2text {
          flex: 1;
        }
        .booth3text {
          flex: 1;
        }

        .performance {
          padding-top: 100px;
          padding-bottom: 50px;
        }
        .performance h1 {
          padding: 10px;
          padding-bottom: 0px;
          margin: 10px;
          margin-bottom: 5px;
        }
        .performance h2 {
          padding-top: 0px;
          margin: 10px;
          margin-top: 5px;
          color: white;
        }

        .elements img {
          animation: shaking 4s ease-in-out infinite;
          filter: blur(1.5px);
        }
        .element1 {
          position: absolute;
          transform: scale(0.3);
          top: 50px;
          right: -170px;
          z-index: 3;
        }
        .element2 {
          position: absolute;
          transform: scale(0.3);
          top: -140px;
          right: 80px;
          z-index: 3;
        }
        .element3 {
          position: absolute;
          transform: scale(0.3);
          top: 200px;
          left: -170px;
          z-index: 3;
          opacity: 0.8;
        }
        .element4 {
          position: absolute;
          transform: scale(0.4);
          bottom: 750px;
          right: -170px;
          z-index: 3;
        }
        .element5 {
          position: absolute;
          transform: scale(0.3);
          top: 550px;
          left: -170px;
          z-index: 3;
        }
        .element6 {
          position: absolute;
          transform: scale(0.5);
          bottom: 520px;
          left: -170px;
          z-index: 1;
          opacity: 0.8;
          filter: blur(4px);
        }
        .element7 {
          position: absolute;
          transform: scale(0.5);
          bottom: -330px;
          left: 290px;
          z-index: 3;
        }
        .element8 {
          position: absolute;
          transform: scale(0.3);
          bottom: 70px;
          right: -150px;
          z-index: 3;
        }
        .element9 {
          position: absolute;
          transform: scale(0.3);
          bottom: 70px;
          left: -160px;
          z-index: 3;
        }
        .element10 {
          position: absolute;
          transform: scale(0.4);
          height: auto;
          width: 500px;
          bottom: 700px;
          right: 270px;
          z-index: 3;
          opacity: 0;
        }
        .element11 {
          position: absolute;
          right: 300px;
          top: 700px;
          transform: scale(3.55);
          z-index: 0;
          opacity: 0.2;
          filter: blur(0px);
          rotate: 180deg;
        }

        .reservation {
          color: white;
          font-weight: bold;
          text-transform: uppercase;
          text-align: center;
          margin: 50px;
          margin-top: 200px;
          padding: 30px;
          position: relative;
          z-index: 2;
        }
        .reservation h2 {
          font-size: 62px;
          letter-spacing: 15px;
        }
        .reservation h4 {
          padding-bottom: 20px;
        }
        .reservation a {
          background-color: #5a8f3e;
          color: white;
          display: inline-block;
          transition: transform 0.3s ease;
          font-size: 20px;
          padding: 8px 20px;
          border-radius: 30px;
          cursor: pointer;
          box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);
        }

        .reservation a:hover {
          background-color: #4a7b32;
          transform: scale(1.08);
        }
        .boothcontent img:hover {
          transform: scale(1.02);
        }

        @keyframes shaking {
          0% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-30px);
          }
          50% {
            transform: translateY(30px);
          }
          75% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

export default HomeContent;
