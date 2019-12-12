import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import App from '@/App';
import store from '@/store';
import i18n from '@/i18n';
import { AjaxContext } from '@/context';
import { send } from '@/apis/ajax';
import 'normalize.css';

const root = document.getElementById('app');

ReactDOM.render(
  <AjaxContext.Provider value={send}>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </AjaxContext.Provider>,
  root
);
