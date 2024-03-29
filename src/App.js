import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from './redux/store';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Booking from './components/views/Booking/Booking';
import Events from './components/views/Events/Events';
import NewBooking from './components/views/NewBooking/NewBooking';
import NewEvent from './components/views/NewEvent/NewEvent';
import Waiter from './components/views/Waiter/WaiterContainer';
import Orders from './components/views/Orders/Orders';
import NewOrder from './components/views/NewOrder/NewOrder';
import Kitchen from './components/views/Kitchen/KitchenContainer';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F'},
    //secondary: { main: '#11cb5f' },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/panel'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`/`} component={Homepage} />
                <Route exact path={`/login`} component={Login} />
                <Route exact path={`/tables`} component={Tables} />
                <Route exact path={`/tables/booking/new`} component={NewBooking} />
                <Route exact path={`/tables/booking/:id`} component={Booking} />
                <Route exact path={`/tables/events/new`} component={NewEvent} />
                <Route exact path={`/tables/events/:id`} component={Events} />
                <Route exact path={`/waiter`} component={Waiter} />
                <Route exact path={`/waiter/order/new`} component={NewOrder} />
                <Route exact path={`/waiter/order/:id`} component={Orders} />
                <Route exact path={`/kitchen`} component={Kitchen} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
