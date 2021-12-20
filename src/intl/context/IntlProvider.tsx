import { Provider, ReactElement, ReactNode, useState } from 'react';
import { IntlContextState } from './IntlContextState';

interface Props<T extends Record<string, Intl.Locale>> {
  children: ReactNode;
  fallback?: keyof T;
}

export const createIntlProvider = <T extends Record<string, Intl.Locale>>(
  Provider: Provider<IntlContextState<T> | undefined>,
  locales: T,
) => {
  // eslint-disable-next-line react/display-name
  return ({ children, fallback }: Props<T>): ReactElement => {
    const keys = Object.keys(locales) as Array<keyof T>;
    const setCurrent = (current: keyof T) => {
      setContextState({
        ...(contextState as IntlContextState<T>),
        current: locales[current],
      });
    };

    const defaultValue = {
      locales,
      setCurrent,
      current: locales[keys[0]], // TODO: Get current from user agent
      fallback: locales[fallback ?? keys[0]],
    };

    const [contextState, setContextState] = useState<IntlContextState<T>>(defaultValue);

    return <Provider value={contextState}>{children}</Provider>;
  };
};
