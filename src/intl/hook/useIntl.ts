import { IntlContextState } from '../context/IntlContextState';
import { dFactory } from './d';
import { nFactory } from './n';
import { tFactory } from './t';

export const createUseIntl = <T extends Record<string, Intl.Locale>>(
  useIntlContext: () => IntlContextState<T>,
) => {
  return () => {
    const { current, fallback } = useIntlContext();
    return {
      d: dFactory(current),
      n: nFactory(current),
      t: tFactory(current, fallback),
    };
  };
};
