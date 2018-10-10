import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import { configureStore } from "./redux/store/configureStore";
import injectTapEventPlugin from 'react-tap-event-plugin';
import { setUser } from './redux/actions/userActions';
import { usuarioVerificado } from "./redux/actions/usuarioVerificadoActions";

injectTapEventPlugin();

export const store = configureStore();

const userInfo = JSON.parse(localStorage.getItem("userInfo"));
if (userInfo) {
    store.dispatch(setUser(userInfo));
} else {
    store.dispatch(usuarioVerificado());
}
//setTimeout( () => {
//  console.log(store.getState());
//}, 8000);

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: "#3E84FF",
    },
});

const Main = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>
);

const WithRouter = () => (
    <BrowserRouter>
        <Main />
    </BrowserRouter>
);


ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
