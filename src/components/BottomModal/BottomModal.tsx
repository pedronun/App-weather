import BottomSheet from "@gorhom/bottom-sheet";
import React, { useMemo, useRef } from "react";
import { FlatList, View } from "react-native";
import { useLocation } from "../../contexts/LocationContext";
import { AirQuality, FeelsHumidity, UvSunrise, VisibilityPressure, WindRainfall } from "../Icon";
import {
  Container,
  Temp,
  TempIcon,
  TempName,
  TempRain,
  TempValue
} from "./BottomModal.styles";
import { temps } from "./temps";

interface BottomModalProps {
  setOpenBottomModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const BottomModal: React.FC<BottomModalProps> = ({ setOpenBottomModal }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["37%", "75%"], []);
  const { searchLocation } = useLocation();

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      backgroundStyle={{ backgroundColor: "#3A2A76" }}
      backgroundComponent={(props) => <BottomSheetBackground {...props} />}
      handleIndicatorStyle={{ backgroundColor: "rgba(0, 0, 0, 0.3)", width: 48, height: 5, borderRadius: 10, marginTop: 10 }}
      onChange={(index) => {
        if (index === 1) {
          setOpenBottomModal(true);
          return;
        }
        
        setOpenBottomModal(false);
        return;
      }}
    >
      <Container>
        <FlatList
          data={temps}
          keyExtractor={(item) => item.id}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Temp
              style={{
                shadowColor: "rgba(0, 0, 0, 0.25)",
                shadowOffset: {
                  width: 5,
                  height: 4,
                },
                shadowOpacity: 1,
                shadowRadius: 10,
                opacity: item.name === "NOW" ? 1 : 0.5,
              }}
            >
              <TempName>{item.name}</TempName>
              <TempIcon
                source={require("../../assets/img/night-cloud-mid-rain.png")}
              />
              {item.rain && <TempRain>{item.rain}%</TempRain>}
              <TempValue>
                {item.name == "NOW"
                  ? searchLocation?.main?.temp.toFixed(0)
                  : item.temp}
                °
              </TempValue>
            </Temp>
          )}
        />
        <AirQuality />
        <UvSunrise />
        <WindRainfall />
        <FeelsHumidity />
        <VisibilityPressure />
      </Container>
    </BottomSheet>
  );
};

const BottomSheetBackground = ({ style }: any) => {
  return (
    <View
      style={[
        {
          borderRadius: 44,
        },
        { ...style },
      ]}
    />
  );
};

export default BottomModal;
