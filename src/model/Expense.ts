export interface Expense {
  //Los id se hacen opcionales pq se crean en el back (O ya estan creados para que no haya incoherencias)
  id?: number;
  expenseId?: string;
  name: string;
  description?: string;
  note: string;
  amount: number;
  date: string;
  category: string;
}
