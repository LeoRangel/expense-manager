import * as C from './App.styles'
// Components
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';
import { useExpense } from './hooks/useExpense';

const App = () => {

  const {
    // list,
    filteredList,
    currentMonth,
    income,
    expense,
    handleMonthChange,
    handleAddItem,
  } = useExpense();

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Expense Manager</C.HeaderText>
      </C.Header>
      <C.Body>

        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
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