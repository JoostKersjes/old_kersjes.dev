import { createIntlContext } from './context/createIntlContext';
import { createIntlProvider } from './context/IntlProvider';
import { createUseIntlState } from './context/useIntlState';
import { createUseIntl } from './hook/useIntl';

export const initIntl = <T extends Record<string, Intl.Locale>>(locales: T) => {
  const [useIntlContext, Provider] = createIntlContext<T>();

  return {
    IntlProvider: createIntlProvider(Provider, locales),
    useIntl: createUseIntl(useIntlContext),
    useIntlState: createUseIntlState(useIntlContext),
  };
};
