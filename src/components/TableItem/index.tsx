import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

import {
    FaMoneyBillAlt,
    FaIceCream,
    FaHome,
    FaTshirt,
    FaBoxOpen
} from "react-icons/fa";

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {

    const categoryIcon = (icon: string) => {
        switch (icon) {
            case 'FaMoneyBillAlt':
                return <FaMoneyBillAlt />;
            case 'FaIceCream':
                return <FaIceCream />;
            case 'FaHome':
                return <FaHome />;
            case 'FaTshirt':
                return <FaTshirt />;
            default:
                return <FaBoxOpen />;
        }
    }

    return (
        <C.TableLine>
            <C.TableDate>
                {formatDate(item.date)}
            </C.TableDate>

            <C.TableColumn>
                <C.ItemRow>
                    <C.Category>
                        <C.CategoryIcon color={categories[item.category].color}>
                            {categoryIcon(categories[item.category].icon)}
                        </C.CategoryIcon>
                        {item.title}
                    </C.Category>

                    <C.Value color={categories[item.category].expense ? '#FF0A43' : '#0EAA4A'}>
                        R$ {item.value}
                        <br />
                        <span>
                            {categories[item.category].expense ? 'Pago' : 'Recebido'}
                        </span>
                    </C.Value>
                </C.ItemRow>
            </C.TableColumn>
        </C.TableLine>
    );
}