import { mount, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import createSagaMiddleware from 'redux-saga';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { Dictionary } from './types';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const mockStore = configureStore(middlewares);

export function createTemplate(Components: any, state?: Dictionary) {
  const store = mockStore(state);
  configure({ adapter: new Adapter() });
  const wrapper = mount(
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Components></Components>
      </Provider>
    </I18nextProvider>
  );
  return { wrapper, store };
}
