import { createContext, useState } from "react";

export const LocationContext = createContext({});

export const LocationProvider = ({ children }) => {
  const GNB = {
    STORE: "store",
    EDUCATION: "education",
    MYPAGE: "mypage",
  };

  const [currentLocation, setCurrentLocation] = useState(GNB.STORE);
  return (
    <LocationContext.Provider value={{ currentLocation, setCurrentLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
