import dayjs from "dayjs";

const formatCurrency = (value: number, currency: string = "USD"): string => {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch (err) {
    const formattedValue = value.toFixed(2);
    return `$${formattedValue}`;
  }
};

const formatSubscriptionDateTime = (date: string) => {
  return dayjs(date).format("DD/MM/YYYY");
};

const formatStatusLabel = (label: string) => {
  const splittedLabel = label.split("");
  splittedLabel[0] = splittedLabel[0].toUpperCase();
  return splittedLabel.join("");
};

export { formatCurrency, formatStatusLabel, formatSubscriptionDateTime };
