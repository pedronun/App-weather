import React, { useState, useEffect } from "react";
import {
  Back,
  BackTitle,
  Container,
  Result,
  ResultImage,
  ResultMinMaxTemp,
  ResultTemp,
  ResultTitle,
  ResultWeather,
  SearchBar,
} from "./Search.styles";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft } from "../../components/Icon";
import {
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Pressable,
} from "react-native";
import api from "../../services/api";
import { API_KEY, API_UNITS, API_URL } from "@env";
import { ISearchLocation } from "../../global/searchLocation";
import { useLocation } from "../../contexts/LocationContext";

const Search = () => {
  const [search, setSearch] = useState("");
  const [isError, setIsError] = useState(false);
  const [weather, setWeather] = useState({} as ISearchLocation);
  const { setSearchLocation } = useLocation();

  const navigation = useNavigation();
  const handlePress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const fetchWeather = async () => {
      await api
        .get(
          `${API_URL}/weather?q=${search}&appid=${API_KEY}&units=${API_UNITS}`
        )
        .then((res) => {
          setWeather(res.data);
          setIsError(false);
        })
        .catch(() => {
          setIsError(true);
        });
    };

    if (search.length == 0) return;

    fetchWeather();
  }, [search]);

  return (
    <LinearGradient colors={["#2E335A", "#1C1B33"]} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container>
          <Back onPress={handlePress}>
            <ChevronLeft />
            <BackTitle>Weather</BackTitle>
          </Back>

          <SearchBar
            value={search}
            onChangeText={setSearch}
            placeholder={"Search for a city"}
            placeholderTextColor={"rgba(235, 235, 245, 0.6)"}
          />
          {search.length == 0 ? (
            <></>
          ) : Object.keys(weather).length && !isError ? (
            <Pressable onPress={() => {
              setSearchLocation(weather);
              navigation.goBack();
            }}>
              <Result
                source={require("../../assets/img/result-background.png")}
                resizeMode={"contain"}
              >
                <ResultImage
                  source={require("../../assets/img/night-cloud-mid-rain.png")}
                />
                <ResultTemp>{weather?.main?.temp.toFixed(0)}°</ResultTemp>
                <ResultMinMaxTemp>
                  H:{weather?.main?.temp_max.toFixed(0)}° L:
                  {weather?.main?.temp_min.toFixed(0)}°
                </ResultMinMaxTemp>
                <ResultTitle>
                  {weather.name}, {weather.sys.country}
                </ResultTitle>
                <ResultWeather>{weather.weather[0].description}</ResultWeather>
              </Result>
            </Pressable>
          ) : (
            <Text
              style={{
                flex: 1,
                color: "#fff",
                alignSelf: "center",
                marginTop: 50,
              }}
            >
              Not found the city
            </Text>
          )}
        </Container>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

export default Search;
