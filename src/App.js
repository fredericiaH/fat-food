import { Route, Routes } from 'react-router-dom';
import './App.css';
import OrderPage from './components/pages/order/OrderPage';
import ErrorPage from './components/pages/error/ErrorPage';
import LoginForm from './components/pages/login/LoginForm';

function App() {

return(
  <Routes>
    <Route path="/" element={<LoginForm />} />
    <Route path="/order/:name" element={<OrderPage />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
  
)
}

export default App;
