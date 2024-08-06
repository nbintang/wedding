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
        src="https://www.google.com/maps/embed?pb=!1m20!1m8!1m3!1d441.043274528316!2d106.79774825408674!3d-6.368106253905451!3m2!1i1024!2i768!4f13.1!4m9!3e9!4m3!3m2!1d-6.3681186!2d106.7976044!4m3!3m2!1d-6.3682279!2d106.7978225!5e0!3m2!1sid!2sid!4v1722935962591!5m2!1sid!2sid"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="rounded-3xl w-[90%] h-72"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps view of Mushola Al-Mukhlisin location"
      />
    </div>
  );
};

export default GoogleMap;
