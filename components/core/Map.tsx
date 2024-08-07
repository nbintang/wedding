import React, { useState } from "react";



const GoogleMap: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-4xl flex justify-center mx-auto relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 z-10">
          <div className="w-8 h-8 border-4 border-cream-300 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <iframe
        src={process.env.NEXT_PUBLIC_GOOGLE_MAP_URL}
        width="600"
        height="450"
        onLoad={handleLoad}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="rounded-3xl w-[90%] h-72"
        title="Google Maps view of Mushola Al-Mukhlisin location"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMap;
