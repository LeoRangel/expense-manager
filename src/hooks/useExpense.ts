import { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";

export const useExpense = () => {
    const value = useContext(ExpenseContext);

    return value;
}