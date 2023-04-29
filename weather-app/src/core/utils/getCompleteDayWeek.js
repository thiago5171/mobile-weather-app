export default function getCompleteDayWeek(day) {
  switch (day) {
    case "Seg":
      return "Monday";
    case "Ter":
      return "Tuesday";
    case "Qua":
      return "Wednesday";
    case "Qui":
      return "Thursday";
    case "Sex":
      return "Friday";
    case "Sáb":
      return "Saturday";
    case "Dom":
      return "Sunday";
    default:
      return null;
  }
}
