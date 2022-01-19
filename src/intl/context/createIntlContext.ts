import { createContext, useContext } from 'react';
import { IntlContextState } from './IntlContextState';

export const createIntlContext = <T extends Record<string, Intl.Locale>>() => {
  const IntlContext = createContext<IntlContextState<T> | undefined>(undefined);
  const useIntlContext = () => {
    const state = useContext(IntlContext);
    if (state === undefined) {
      throw new Error('Cannot use Intl hooks outside of IntlProvider scope');
    }
    return state;
  };

  return [useIntlContext, IntlContext.Provider] as const;
};
