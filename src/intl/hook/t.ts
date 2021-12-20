import { lookupMessage } from '../messages/lookupMessage';

export const tFactory = (current: Intl.Locale, fallback: Intl.Locale) => {
  return (key: string): string => {
    return lookupMessage(key, current) || lookupMessage(key, fallback) || '';
  };
};
