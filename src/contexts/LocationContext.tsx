import { createContext, useContext, useState, useEffect } from "react";
import { ILocation } from "../global/location";
import * as Location from "expo-location";
import api from "../services/api";
import { API_KEY, API_UNITS, API_URL } from "@env";
import { ISearchLocation } from "../global/searchLocation";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ILocationContextProviderProps {
  children: React.ReactNode;
}

interface ILocationContextType {
  currentLocation: Location.LocationObject;
  setCurrentLocation: React.Dispatch<
    React.SetStateAction<Location.LocationObject>
  >;
  searchLocation: ISearchLocation;
  setSearchLocation: React.Dispatch<React.SetStateAction<ISearchLocation>>;
}

const LocationContext = createContext({} as ILocationContextType);
const useLocation = () => useContext(LocationContext);

const LocationContextProvider: React.FC<ILocationContextProviderProps> = ({
  children,
}) => {
  const [currentLocation, setCurrentLocation] = useState(
    {} as Location.LocationObject
  );
  const [searchLocation, setSearchLocation] = useState({} as ISearchLocation);

  useEffect(() => {
    const getLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setCurrentLocation({} as ILocation);
        return;
      }

      const value = await AsyncStorage.getItem('@weather:location')

      if (value) {
        setSearchLocation(JSON.parse(value))
        return
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      const { data } = await api.get(
        `${API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${API_UNITS}`
      );

      await AsyncStorage.setItem("@weather:location", JSON.stringify(data));
      setCurrentLocation(location);
      setSearchLocation(data);
    };

    getLocation();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        currentLocation,
        setCurrentLocation,
        searchLocation,
        setSearchLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export { useLocation, LocationContext, LocationContextProvider };
