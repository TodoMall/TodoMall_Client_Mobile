import { useContext } from "react";
import { LocationContext } from "../context/LocationProvider";

const useCurrentLocation = () => {
  const { currentLocation, setCurrentLocation } = useContext(LocationContext);
  return [currentLocation, setCurrentLocation];
};

export default useCurrentLocation;
