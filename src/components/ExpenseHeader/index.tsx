import * as C from './style';
import { ReactComponent as CalendarIcon } from '../../assets/images/calendar.svg';
import { MonthSelector } from '../MonthSelector';

type ExpenseHeaderProps = {
    income: number;
    expense: number;
}

export const ExpenseHeader = ({ income, expense }: ExpenseHeaderProps) => {

    return (
        <C.ExpenseHeader
            color={(income - expense) < 0 ? '#FF0A43' : '#0EAA4A'}
        >
            <CalendarIcon
                fill="#ffffff"
                width="50px"
                height="50px"
                style={{ marginBottom: '20px' }}
            />

            <MonthSelector
                textColor="white"
                fontSize="2rem"
            />
        </C.ExpenseHeader>
    )
}