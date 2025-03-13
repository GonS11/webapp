import { useParams, useNavigate } from 'react-router-dom';
import CurrencyUtils from '../../utils/CurrencyUtils';
import DateUtils from '../../utils/DateUtils';
import useExpenseByExpenseId from '../../hooks/useExpenseByExpenseId';

function ExpenseDetails() {
  const { expenseId } = useParams<{ expenseId: string }>();
  const navigate = useNavigate();
  const { expense, errors, isLoading } = useExpenseByExpenseId(expenseId ?? '');

  if (!expenseId) {
    return <p className="text-danger text-center mt-3">Invalid expense ID</p>;
  }

  return (
    <div className="container mt-4">
      {isLoading && <p className="text-center">Loading...</p>}
      {errors && (
        <p className="text-danger text-center">
          {typeof errors === 'string' ? errors : 'An error occurred'}
        </p>
      )}
      {!expense && !isLoading && (
        <p className="text-center">No data available</p>
      )}

      {expense && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
            <div className="d-flex gap-2">
              <button className="btn btn-sm btn-warning">Edit</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </div>
          </div>
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <table className="table table-borderless ">
                <tbody>
                  <tr>
                    <th className="w-25 text-end">Name</th>
                    <td>{expense.name}</td>
                  </tr>
                  <tr>
                    <th className="w-25 text-end">Category</th>
                    <td>{expense.category}</td>
                  </tr>
                  <tr>
                    <th className="w-25 text-end">Amount</th>
                    <td>{CurrencyUtils.formatToINR(expense.amount)}</td>
                  </tr>
                  <tr>
                    <th className="w-25 text-end">Date</th>
                    <td>{DateUtils.formatDateString(expense.date)}</td>
                  </tr>
                  <tr>
                    <th className="w-25 text-end">Note</th>
                    <td>{expense.note}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ExpenseDetails;
