import ReactDOM from 'react-dom';
import { initIntl } from './intl';
import { App } from './components/App';

import './styles/index.scss';

const locales = {
  en: new Intl.Locale('en-GB'),
  nl: new Intl.Locale('nl-NL'),
};

const { IntlProvider, useIntl, useIntlState } = initIntl(locales);
export { useIntl, useIntlState };

ReactDOM.render(
  <IntlProvider>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);
