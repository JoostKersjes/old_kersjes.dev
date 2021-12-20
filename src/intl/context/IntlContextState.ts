export interface IntlContextState<T extends Record<string, Intl.Locale>> {
  locales: T;
  current: T[keyof T];
  fallback: T[keyof T];
  setCurrent: (locale: keyof T) => void;
}
