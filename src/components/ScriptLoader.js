import React from 'react';

export default function loadDynamicScript (src, libraryName, callback) {
    const existingScript = document.getElementById('scriptId');
  
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = src; // URL for the third-party library being loaded.
      script.id = libraryName; // e.g., googleMaps or stripe
      document.body.appendChild(script);
  
      script.onload = () => {
        if (callback) callback();
      };
    }
  
    if (existingScript && callback) callback();
  };