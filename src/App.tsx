import { Outlet } from 'react-router-dom'
import './assets/styles/main.css'
import './assets/styles/variables.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from './GlobalProvider';

function App() {

  return (
    <GlobalProvider>
    <Outlet/>
    </GlobalProvider>
  )
}

export default App
