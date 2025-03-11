import { Expense } from '../model/Expense';

interface ExpenseListProps {
  expenses: Expense[];
}

function ExpenseList({ expenses }: ExpenseListProps) {
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            //Se usa expenseId y no Id pq nunca se deberia pasar el id, esto es un campo nuestro
            <tr key={expense.expenseId}>
              <td>{expense.name}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
