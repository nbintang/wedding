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
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3965.199530262661!2d106.79782900000001!3d-6.368219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjInMDUuNiJTIDEwNsKwNDcnNTIuMiJF!5e0!3m2!1sid!2sid!4v1722951664348!5m2!1sid!2sid"
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
