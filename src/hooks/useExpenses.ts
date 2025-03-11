import { useEffect, useState } from 'react';
import { Expense } from '../model/Expense';
import { getExpenses } from '../services/expense-service';

const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    //API call to backend system (Solo añadimos la parte de la URL que tiene expenses)
    getExpenses()
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoader(false)); //Con finally sea response o error siempre llega
  }, []);

  return { expenses, error, isLoading };
};

export default useExpenses;
