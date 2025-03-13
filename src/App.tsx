import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NewExpense from './pages/expense/NewExpense';
import ExpenseReports from './pages/expense/ExpenseReports';
import ExpenseDetails from './pages/expense/ExpenseDetails';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new" element={<NewExpense />} />
        <Route path="/view/:expenseId" element={<ExpenseDetails />} />
        <Route path="/reports" element={<ExpenseReports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
