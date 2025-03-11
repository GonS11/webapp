import ExpenseList from '../../components/ExpenseList';
import useExpenses from '../../hooks/useExpenses';

function Dashboard() {
  const { expenses, error, isLoading } = useExpenses(); //CustomHook

  return (
    <div className="container">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default Dashboard;
