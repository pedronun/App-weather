import { View } from "react-native";
import { useLocation } from "../../contexts/LocationContext";
import {
  City,
  Container,
  MaxTemp,
  MinMaxTemp,
  MinTemp,
  Temp,
  Weather
} from "./Temperature.styles";

interface TemperatureProps {
  openBottomModal: boolean;
}

const Temperature: React.FC<TemperatureProps> = ({ openBottomModal }) => {
  const { searchLocation } = useLocation();

  if (!Object.keys(searchLocation).length) return <Container />;

  return (
    <Container openBottomModal={openBottomModal}>
      {openBottomModal ? (
        <View>
          <City>{searchLocation?.name}</City>
          <Weather>
            {searchLocation?.main?.temp.toFixed(0)}° |{" "}
            {searchLocation?.weather[0]?.description}
          </Weather>
        </View>
      ) : (
        <>
          <City>{searchLocation?.name}</City>
          <Temp>{searchLocation?.main?.temp.toFixed(0)}°</Temp>
          <View>
            <Weather>{searchLocation?.weather[0]?.description}</Weather>
            <MinMaxTemp>
              <MinTemp>H:{searchLocation?.main?.temp_min.toFixed(0)}°</MinTemp>
              <MaxTemp>L:{searchLocation?.main?.temp_max.toFixed(0)}°</MaxTemp>
            </MinMaxTemp>
          </View>
        </>
      )}
    </Container>
  );
};

export default Temperature;
