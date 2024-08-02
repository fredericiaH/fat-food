import { Route, Routes } from 'react-router-dom';
import './App.css';
import OrderPage from './components/pages/order/OrderPage';
import ErrorPage from './components/pages/error/ErrorPage';
import LoginForm from './components/pages/login/LoginForm';
import LoginPage from './components/pages/login/LoginPage';

function App() {

return(
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/order/:name" element={<OrderPage />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
  
)
}

export default App;
