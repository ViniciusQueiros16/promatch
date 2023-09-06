import { formatInTimeZone } from "date-fns-tz";

const dateFormat = (dateString) => {
  if (dateString) {
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return formatInTimeZone(date, "America/Sao_Paulo", "yyyy-MM-dd");
    }
  }

  return "";
};

export default dateFormat;
