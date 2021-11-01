import * as C from './App.styles'
// Components
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';
import { useExpense } from './hooks/useExpense';
import { ExpenseHeader } from './components/ExpenseHeader';

const App = () => {

  const {
    // list,
    filteredList,
    // currentMonth,
    income,
    expense,
    handleMonthChange,
    handleAddItem,
  } = useExpense();

  return (
    <C.Container>
      <ExpenseHeader
        income={income}
        expense={expense}
      />

      <C.Body>
        <InfoArea
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;