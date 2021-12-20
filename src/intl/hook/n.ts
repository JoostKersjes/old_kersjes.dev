export const nFactory = (locale: Intl.Locale) => {
  return (value: number, options: Intl.NumberFormatOptions = {}) => {
    return new Intl.NumberFormat(locale.toString(), options).format(value);
  };
};
