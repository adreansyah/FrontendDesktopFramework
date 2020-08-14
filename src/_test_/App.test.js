import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import store from 'store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@elevenia/master-ui/Theme/globalStyles'
import theme from '@elevenia/master-ui/Theme';

describe('example test ', () => {
  it('renders without crashing', () => {
    shallow(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyles />
          <App />
        </Provider>
      </ThemeProvider>
    );
  });

  it('2 + 2 should be 4', () => {
    expect(2 + 2).toBe(4);
  })

  it('Should be equals an object assign', () => {
    const data = { one: 1 }
    data['two'] = 2
    expect(data).toEqual({ one: 1, two: 2 })
  });
});

