import * as C from './style';
import { MonthSelector } from '../MonthSelector';
import { FaCalendarAlt } from "react-icons/fa";

type ExpenseHeaderProps = {
    income: number;
    expense: number;
}

export const ExpenseHeader = ({ income, expense }: ExpenseHeaderProps) => {

    return (
        <C.ExpenseHeader
            color={(income - expense) < 0 ? '#FF0A43' : '#0EAA4A'}
        >
            <FaCalendarAlt
                size="40px"
                color="white"
                style={{ marginBottom: '20px' }}
            />

            <MonthSelector
                textColor="white"
                fontSize="2rem"
            />
        </C.ExpenseHeader>
    )
}