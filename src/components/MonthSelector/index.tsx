import { formatCurrentMonth } from '../../helpers/dateFilter';
import { useExpense } from '../../hooks/useExpense';
import * as C from './style';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type MonthSelectorProps = {
    textColor?: string;
    fontSize?: string;
}

export const MonthSelector = ({ textColor, fontSize }: MonthSelectorProps) => {

    const { currentMonth, handleMonthChange } = useExpense();

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        handleMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        handleMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    return (
        <C.MonthSelector textColor={textColor} fontSize={fontSize}>
            <C.MonthSelectorArrow onClick={handlePrevMonth}>
                <FaChevronLeft
                    color={textColor}
                    size={fontSize}
                />
            </C.MonthSelectorArrow>
            <C.MonthSelectorTitle>{formatCurrentMonth(currentMonth)}</C.MonthSelectorTitle>
            <C.MonthSelectorArrow onClick={handleNextMonth}>
                <FaChevronRight
                    color={textColor}
                    size={fontSize}
                />
            </C.MonthSelectorArrow>
        </C.MonthSelector>
    )
}