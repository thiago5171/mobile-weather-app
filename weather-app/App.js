import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Header from "./src/ui/components/molecules/header";
import api from "./src/infra/index";
import CurrentWeather from "./src/ui/components/molecules/currentWeather";
// import LinearGradient from "react-native-linear-gradient";

export default function App() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [mainImg, setMainImg] = useState();
  const [data, setData] = useState(weather);
  const handleSelectOption = (optionValue) => {
    setSelectedOption(optionValue);
  };

  const handlePressButton = () => {
    // handle button press here
  };

  useEffect(() => {
    // api.get(``).then((response) => setData(response.data));
    // console.log(response);
    // switch(response.data.results.condition_slug) {
    //   case 'clear_day':
    //    setMainImg
    //     break;
    //   case 'rain':
    //     setIcon({ name: 'rainy', color: '#FFF' });
    //     break;
    //   case 'storm':
    //     setIcon({ name: 'rainy', color: '#FFF' });
    //     break;
    // }
  }, []);
  if (data == {}) return <View></View>;
  return (
    // <LinearGradient
    //   colors={["#08244F", "#0B6FB8"]}
    //   style={styles.linearGradient}
    // >
    <View style={styles.container}>
      <Header
        placeholder={"Fortaleza"}
        options={[
          { label: "Fortaleza", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
        selectedOption={selectedOption}
        onSelectOption={handleSelectOption}
        onPressButton={handlePressButton}
      />
      <CurrentWeather weather={data} />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    // </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#08244F",
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

const weather = {
  by: "default",
  valid_key: false,
  results: {
    temp: 21,
    date: "27/04/2023",
    time: "11:13",
    condition_code: "29",
    description: "Parcialmente nublado",
    currently: "dia",
    cid: "",
    city: "São Paulo, SP",
    img_id: "29",
    humidity: 76,
    cloudiness: 40.0,
    rain: 0.0,
    wind_speedy: "4.63 km/h",
    wind_direction: 300,
    sunrise: "06:24 am",
    sunset: "05:43 pm",
    condition_slug: "cloud",
    city_name: "São Paulo",
    forecast: [
      {
        date: "27/04",
        weekday: "Qui",
        max: 23,
        min: 16,
        cloudiness: 88.0,
        rain: 1.26,
        rain_probability: 85,
        wind_speedy: "4.38 km/h",
        description: "Chuvas esparsas",
        condition: "rain",
      },
      {
        date: "28/04",
        weekday: "Sex",
        max: 22,
        min: 16,
        cloudiness: 68.0,
        rain: 0.0,
        rain_probability: 19,
        wind_speedy: "4.46 km/h",
        description: "Tempo nublado",
        condition: "cloudly_day",
      },
      {
        date: "29/04",
        weekday: "Sáb",
        max: 21,
        min: 15,
        cloudiness: 87.0,
        rain: 0.36,
        rain_probability: 57,
        wind_speedy: "3.89 km/h",
        description: "Chuvas esparsas",
        condition: "rain",
      },
      {
        date: "30/04",
        weekday: "Dom",
        max: 26,
        min: 16,
        cloudiness: 1.0,
        rain: 0.15,
        rain_probability: 22,
        wind_speedy: "2.95 km/h",
        description: "Chuvas esparsas",
        condition: "rain",
      },
      {
        date: "01/05",
        weekday: "Seg",
        max: 26,
        min: 16,
        cloudiness: 0.0,
        rain: 0.0,
        rain_probability: 2,
        wind_speedy: "3.23 km/h",
        description: "Tempo limpo",
        condition: "clear_day",
      },
      {
        date: "02/05",
        weekday: "Ter",
        max: 26,
        min: 17,
        cloudiness: 0.0,
        rain: 0.3,
        rain_probability: 25,
        wind_speedy: "1.89 km/h",
        description: "Chuvas esparsas",
        condition: "rain",
      },
      {
        date: "03/05",
        weekday: "Qua",
        max: 26,
        min: 16,
        cloudiness: 0.0,
        rain: 0.0,
        rain_probability: 0,
        wind_speedy: "3.17 km/h",
        description: "Tempo limpo",
        condition: "clear_day",
      },
      {
        date: "04/05",
        weekday: "Qui",
        max: 27,
        min: 16,
        cloudiness: 39.0,
        rain: 0.0,
        rain_probability: 0,
        wind_speedy: "3.82 km/h",
        description: "Parcialmente nublado",
        condition: "cloud",
      },
      {
        date: "05/05",
        weekday: "Sex",
        max: 28,
        min: 17,
        cloudiness: 1.0,
        rain: 0.0,
        rain_probability: 0,
        wind_speedy: "4.53 km/h",
        description: "Tempo limpo",
        condition: "clear_day",
      },
      {
        date: "06/05",
        weekday: "Sáb",
        max: 28,
        min: 18,
        cloudiness: 49.0,
        rain: 0.0,
        rain_probability: 3,
        wind_speedy: "6.23 km/h",
        description: "Parcialmente nublado",
        condition: "cloud",
      },
    ],
    cref: "fc865d",
  },
  execution_time: 0.0,
  from_cache: true,
};
