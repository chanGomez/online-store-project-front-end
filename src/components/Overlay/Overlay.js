import React from 'react';
import "./Overlay.css";

function Overlay({ children, isLoading }) {
    return (
      <>
        {isLoading && (
          <div className="loading style">
            <div className="loading-text">...Loading</div>
          </div>
        )}
        {children}
      </>
    );
  }

export default Overlay;