import { StyleSheet, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import Header from "../../components/molecules/header";
import api from "../../../infra";
import CurrentWeather from "../../components/molecules/currentWeather";
import DailyTemperature from "../../components/molecules/dailyTemperature";
import NextForecast from "../../components/molecules/nextForecast";
import cities from "../../../core/utils/cityList";
import Loading from "../../components/atoms/loading";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../utils/generalColor";
import weather from "../../../core/utils/mockWeather";

function Home() {
  const [selectedOption, setSelectedOption] = useState();
  const [data, setData] = useState({});
  const [color, setColor] = useState(colors.clearDay);

  const handlePressButton = (selectedOption) => {
    setData({});
    setSelectedOption(selectedOption);
    api
      .get("", { params: { woeid: selectedOption } })
      .then((response) => {
        setData(response.data);
        if (
          response.data.results.currently === "noite" ||
          response.data.results.description.includes("Chuv")
        ) {
          setColor(colors.rainDay);
        } else {
          setColor(colors.clearDay);
        }
      })
      .catch((error) => {
        setData(weather);
        console.log(error);
        return alert(
          "Acesso ao conteudo esta indisponivel no momento, verifique suas credenciais ou volte mais tarde."
        );
      });
  };

  useEffect(() => {
    setData({});
    api
      .get("", { params: { woeid: selectedOption } })
      .then((response) => {
        setData(response.data);
        if (
          response.data.results.currently === "noite" ||
          response.data.results.description.includes("Chuv")
        ) {
          setColor(colors.rainDay);
        } else {
          setColor(colors.clearDay);
        }
      })
      .catch((error) => {
        console.log(error);
        setData(weather);
        return alert(
          "Acesso ao conteudo esta indisponivel no momento, verifique suas credenciais ou volte mais tarde."
        );
      });
  }, []);

  if (Object.keys(data).length === 0) return <Loading />;

  return (
    <ScrollView style={styles.scrollView}>
      <LinearGradient
        colors={color.backgroundColor}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <Header
            options={cities}
            selectedOption={selectedOption}
            onSelectOption={(value) => handlePressButton(value)}
          />
          <CurrentWeather weather={data} color={color} />
          <DailyTemperature color={color} data={data} />
          <NextForecast data={data} color={color} />
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    flex: 1,
  },
  forecast: { width: "80%", height: 100 },
});

export default Home;
