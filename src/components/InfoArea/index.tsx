import * as C from './styles';
import { ResumeItem } from '../ResumeItem';

type Props = {
    income: number;
    expense: number;
}

export const InfoArea = ({ income, expense }: Props) => {

    return (
        <C.Container>
            <C.ResumeArea>
                <ResumeItem title="Income" value={income} />
                <ResumeItem title="Expense" value={expense} />
                <ResumeItem
                    title="Balance"
                    value={income - expense}
                    color={(income - expense) < 0 ? '#FF0A43' : '#0EAA4A'}
                />
            </C.ResumeArea>
        </C.Container>
    );
}