const { default: Components } = require("./enum/components");
import { Image } from "react-native";

function SelectedWeatherSituation(situation, styles, locale) {
  if (locale === Components.DAILY_TEMPERATURE) {
    if (situation.includes("Chuvas")) {
      return (
        <Image
          style={{ ...styles, height: 40, width: 40 }}
          source={require("../../ui/assets/rain.png")}
        />
      );
    } else if (situation.includes("Nublado")) {
      return (
        <Image style={styles} source={require("../../ui/assets/cloudy.png")} />
      );
    } else if (situation.includes("limpo")) {
      return (
        <Image style={styles} source={require("../../ui/assets/clear.png")} />
      );
    } else {
      return (
        <Image style={styles} source={require("../../ui/assets/cloudy.png")} />
      );
    }
  } else if (locale === Components.CURRENT_WEATHER) {
    if (situation.includes("Chuvas")) {
      return (
        <Image
          style={styles}
          source={require("../../ui/assets/sun-cloud-angled-rain.png")}
        />
      );
    } else if (situation.includes("limpo")) {
      return (
        <Image
          style={styles}
          source={require("../../ui/assets/main-sun.png")}
        />
      );
    } else {
      return (
        <Image
          style={styles}
          source={require("../../ui/assets/main-sun-moon.png")}
        />
      );
    }
  } else if (locale === Components.NEXT_FORECAST) {
    if (situation.includes("Chuvas")) {
      return (
        <Image
          style={styles}
          source={require("../../ui/assets/big-rain-drops.png")}
        />
      );
    } else if (situation.includes("limpo")) {
      return (
        <Image style={styles} source={require("../../ui/assets/sun.png")} />
      );
    } else {
      return (
        <Image style={styles} source={require("../../ui/assets/cloudy.png")} />
      );
    }
  }
}

export default SelectedWeatherSituation;
