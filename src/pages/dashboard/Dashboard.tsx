import ExpenseList from '../../components/ExpenseList';
import useExpenses from '../../hooks/useExpenses';
import { Expense } from '../../model/Expense';
import DashboardStatus from './DashboardStatus';

function Dashboard() {
  const { expenses, error, isLoading } = useExpenses(); //CustomHook

  const loggedInUser: string = 'test@example.com';
  const totalExpenses: number = expenses.reduce(
    (acc: number, expense: Expense) => acc + expense.amount,
    0,
  );

  return (
    <div className="container">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <DashboardStatus
        loggedInUser={loggedInUser}
        totalExpenses={totalExpenses}
      />
      <hr />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default Dashboard;
