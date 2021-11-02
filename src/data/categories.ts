import { Category } from '../types/Category';

export const categories: Category = {
    salary: { title: 'Salário', color: '#0EAA4A', expense: false, icon: 'FaMoneyBillAlt' },
    payment: { title: 'Pagamento', color: '#0EAA4A', expense: false, icon: 'FaMoneyBillAlt' },
    food: { title: 'Alimentação', color: '#F39237', expense: true, icon: 'FaIceCream' },
    home: { title: 'Casa', color: '#46237A', expense: true, icon: 'FaHome' },
    clothe: { title: 'Roupas', color: '#2176AE', expense: true, icon: 'FaTshirt' },
    other: { title: 'Outros', color: 'gray', expense: true, icon: 'FaBoxOpen' },
}