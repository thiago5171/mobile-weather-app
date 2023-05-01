import { StyleSheet, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import Header from "./src/ui/components/molecules/header";
import api from "./src/infra/index";
import CurrentWeather from "./src/ui/components/molecules/currentWeather";
import DailyTemperature from "./src/ui/components/molecules/dailyTemperature";
import NextForecast from "./src/ui/components/molecules/nextForecast";
import cidades from "./src/core/utils/cityList";
import Loading from "./src/ui/components/atoms/loading";
// import LinearGradient from "react-native-linear-gradient";

export default function App() {
  const [selectedOption, setSelectedOption] = useState(455827);
  const [data, setData] = useState({});

  const handlePressButton = () => {
    if (selectedOption) {
      api
        .get(`&woeid=${selectedOption}`)
        .then((response) => setData(response.data))
        .catch((error) => {
          console.log(error.config);
          setData(weather);
          return alert(
            "Acesso ao conteudo esta indisponivel no momento, verifique suas credenciais ou volte mais tarde."
          );
        });
    }
  };
  console.log(selectedOption);
  useEffect(() => {
    setData({});
    api
      .get(`&woeid=${selectedOption}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.config);
        setData(weather);
        return alert(
          "Acesso ao conteudo esta indisponivel no momento, verifique suas credenciais ou volte mais tarde."
        );
      });
  }, [selectedOption]);
  if (Object.keys(data).length === 0) return <Loading />;

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Header
          options={cidades}
          selectedOption={selectedOption}
          onSelectOption={(value) => setSelectedOption(value)}
          onPressButton={handlePressButton}
        />
        <CurrentWeather weather={data} />
        <DailyTemperature data={data} />

        <NextForecast data={data} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    height: "100%",
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
  forecast: { width: "80%", height: 100 },
});

const weather = {
  by: "woeid",
  valid_key: true,
  results: {
    temp: 20,
    date: "30/04/2023",
    time: "22:08",
    condition_code: "28",
    description: "Tempo nublado",
    currently: "noite",
    cid: "",
    city: "São Paulo, SP",
    img_id: "28n",
    humidity: 90,
    cloudiness: 75.0,
    rain: 0.0,
    wind_speedy: "3.09 km/h",
    wind_direction: 160,
    sunrise: "06:26 am",
    sunset: "05:41 pm",
    condition_slug: "cloudly_night",
    city_name: "São Paulo",
    forecast: [
      {
        date: "30/04",
        weekday: "Dom",
        max: 25,
        min: 16,
        cloudiness: 17.0,
        rain: 0.0,
        rain_probability: 18,
        wind_speedy: "2.54 km/h",
        description: "Parcialmente nublado",
        condition: "cloudly_day",
      },
      {
        date: "01/05",
        weekday: "Seg",
        max: 25,
        min: 16,
        cloudiness: 0.0,
        rain: 0.0,
        rain_probability: 20,
        wind_speedy: "3.46 km/h",
        description: "Tempo limpo",
        condition: "clear_day",
      },
      {
        date: "02/05",
        weekday: "Ter",
        max: 26,
        min: 16,
        cloudiness: 0.0,
        rain: 0.0,
        rain_probability: 2,
        wind_speedy: "1.63 km/h",
        description: "Tempo limpo",
        condition: "clear_day",
      },
      {
        date: "03/05",
        weekday: "Qua",
        max: 26,
        min: 16,
        cloudiness: 19.0,
        rain: 0.0,
        rain_probability: 0,
        wind_speedy: "3.47 km/h",
        description: "Parcialmente nublado",
        condition: "cloudly_day",
      },
      {
        date: "04/05",
        weekday: "Qui",
        max: 26,
        min: 16,
        cloudiness: 53.0,
        rain: 0.0,
        rain_probability: 0,
        wind_speedy: "6.25 km/h",
        description: "Tempo nublado",
        condition: "cloudly_day",
      },
      {
        date: "05/05",
        weekday: "Sex",
        max: 26,
        min: 17,
        cloudiness: 55.0,
        rain: 0.0,
        rain_probability: 13,
        wind_speedy: "4.74 km/h",
        description: "Tempo nublado",
        condition: "cloudly_day",
      },
      {
        date: "06/05",
        weekday: "Sáb",
        max: 20,
        min: 16,
        cloudiness: 100.0,
        rain: 4.86,
        rain_probability: 92,
        wind_speedy: "4.77 km/h",
        description: "Chuva",
        condition: "rain",
      },
      {
        date: "07/05",
        weekday: "Dom",
        max: 17,
        min: 15,
        cloudiness: 100.0,
        rain: 11.2,
        rain_probability: 100,
        wind_speedy: "3.92 km/h",
        description: "Chuva",
        condition: "rain",
      },
      {
        date: "08/05",
        weekday: "Seg",
        max: 21,
        min: 14,
        cloudiness: 99.0,
        rain: 0.75,
        rain_probability: 77,
        wind_speedy: "3.14 km/h",
        description: "Chuvas esparsas",
        condition: "rain",
      },
      {
        date: "09/05",
        weekday: "Ter",
        max: 23,
        min: 16,
        cloudiness: 55.0,
        rain: 3.4,
        rain_probability: 93,
        wind_speedy: "3.45 km/h",
        description: "Chuvas esparsas",
        condition: "rain",
      },
    ],
    cref: "ec14fd",
  },
  execution_time: 0.0,
  from_cache: true,
};
