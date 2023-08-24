import React from "react";
import grey from "../../assets/grey.png";
import "./Overlay.css";

function Overlays({ children, isLoading }) {
  return (
    <div>
      {isLoading && (
        <div className="loading style">
          {/* <div className="loading-text">...Loading</div> */}
          <div className="card" style={{ width: "12rem" }}>
            <img
              src={grey}
              className="card-img-top"
              alt="..."
              style={{ height: "230px" }}
            />
            <div className="card-body">
              <p className="loading-p">Loading</p>
            </div>
          </div>
          <div className="card" style={{ width: "12rem" }}>
            <img
              src={grey}
              className="card-img-top"
              alt="..."
              style={{ height: "230px" }}
            />
            <div className="card-body">
            <p className="loading-p">Loading</p>
              
            </div>
          </div>
          <div className="card" style={{ width: "12rem" }}>
            <img
              src={grey}
              className="card-img-top"
              alt="..."
              style={{ height: "230px" }}
            />
            <div className="card-body">
            <p className="loading-p">Loading</p>

            </div>
          </div>
          <div className="card" style={{ width: "12rem" }}>
            <img
              src={grey}
              className="card-img-top"
              alt="..."
              style={{ height: "230px" }}
            />
            <div className="card-body">
            <p className="loading-p">Loading</p>

            </div>
            
          </div>
          <div className="card" style={{ width: "12rem" }}>
            <img
              src={grey}
              className="card-img-top"
              alt="..."
              style={{ height: "230px" }}
            />
            <div className="card-body">
            <p className="loading-p">Loading</p>

            </div>
            
          </div>
        </div>
      )}
      {children}
    </div>
  );
}

export default Overlays;
