import { createContext, ReactNode, useEffect, useState } from "react"
import { categories } from "../data/categories";
import { items } from "../data/items";
import { filterListByMonth, getCurrentMonth } from "../helpers/dateFilter";
import { Item } from "../types/Item";


type ExpenseContextProps = {
    list: Item[],
    filteredList: Item[],
    currentMonth: string,
    income: number,
    expense: number,
    handleMonthChange: (newMonth: string) => void,
    handleAddItem: (item: Item) => void,
}

type ExpenseContextProviderProps = {
    children: ReactNode,
}

export const ExpenseContext = createContext({} as ExpenseContextProps);

export const ExpenseContextProvider = (props: ExpenseContextProviderProps) => {

    const [list, setList] = useState(items);
    const [filteredList, setFilteredList] = useState<Item[]>([]);
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    useEffect(() => {
        setFilteredList(filterListByMonth(list, currentMonth))
    }, [list, currentMonth])

    useEffect(() => {
        let incomeCount = 0;
        let expenseCount = 0;

        for (let i in filteredList) {
            if (categories[filteredList[i].category].expense) {
                expenseCount += filteredList[i].value;
            } else {
                incomeCount += filteredList[i].value;
            }
        }

        setIncome(incomeCount);
        setExpense(expenseCount);
    }, [filteredList]);

    const handleMonthChange = (newMonth: string) => {
        setCurrentMonth(newMonth);
    }

    const handleAddItem = (item: Item) => {
        let newList = [...list];
        newList.push(item);
        setList(newList);
    }

    return (
        <ExpenseContext.Provider value={{
            list,
            filteredList,
            currentMonth,
            income,
            expense,
            handleMonthChange,
            handleAddItem,
        }}>
            {props.children}
        </ExpenseContext.Provider>
    )
}

