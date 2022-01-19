export const dFactory = (locale: Intl.Locale) => {
  return (date: Date | number, options: Intl.DateTimeFormatOptions = {}): string => {
    return new Intl.DateTimeFormat(locale.toString(), options).format(date);
  };
};
