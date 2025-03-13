import { useEffect, useState } from 'react';
import { Expense } from '../model/Expense';
import { getExpenseByExpenseId } from '../services/expense-service';

const useExpenseByExpenseId = (expenseId: string) => {
  const [expense, setExpense] = useState<Expense | null>(null);
  const [errors, setErrors] = useState<string>('');
  const [isLoading, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);

    getExpenseByExpenseId(expenseId)
      .then((response) => setExpense(response.data))
      .catch((error) => setErrors(error.message || 'Something went wrong'))
      .finally(() => setLoader(false));
  }, [expenseId]);

  return { expense, errors, isLoading };
};

export default useExpenseByExpenseId;
