import * as C from './styles';

import {
    FaCaretUp,
    FaCaretDown,
    FaBalanceScale,
} from "react-icons/fa";

type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color }: Props) => {

    const resumeItemIcon = (title: string) => {
        switch (title) {
            case 'Income':
                return <FaCaretUp />;
            case 'Expense':
                return <FaCaretDown />;
            case 'Balance':
                return <FaBalanceScale />;
            default:
                break;
        }
    }

    return (
        <C.Container>
            <C.Title>
                {title}
                <C.ResumeIcon> {resumeItemIcon(title)}</C.ResumeIcon>
            </C.Title >
            <C.Info color={color}>R$ {value}</C.Info>
        </C.Container >
    );
}