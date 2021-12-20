import { ReactElement } from 'react';
import { useIntlState } from '../index';

export const App = (): ReactElement => {
  const { setCurrent } = useIntlState();

  return (
    <div>
      <h1>Hello World</h1>
      <button
        onClick={() => {
          setCurrent('nl');
        }}
      >
        NL
      </button>
      <button
        onClick={() => {
          setCurrent('en');
        }}
      >
        EN
      </button>
    </div>
  );
};
