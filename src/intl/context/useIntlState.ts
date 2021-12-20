import { IntlContextState } from './IntlContextState';

export const createUseIntlState = <T extends Record<string, Intl.Locale>>(
  useIntlContext: () => IntlContextState<T>,
) => {
  return () => {
    const { locales, setCurrent } = useIntlContext();
    return {
      locales,
      setCurrent,
    };
  };
};
