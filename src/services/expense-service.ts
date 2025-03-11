import apiClient from '../config/api-client';
import { Expense } from '../model/Expense';

//Se crea para reducier el codigo en el useEffect a la API. Se modulariza
export const getExpenses = () => {
  return apiClient.get<Expense[]>('/expenses');
};
