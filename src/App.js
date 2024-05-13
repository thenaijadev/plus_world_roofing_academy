import { jsx as _jsx } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import './assets/styles/main.css';
import './assets/styles/variables.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from './GlobalProvider';
function App() {
    return (_jsx(GlobalProvider, { children: _jsx(Outlet, {}) }));
}
export default App;
