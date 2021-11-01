import { Category } from '../types/Category';

export const categories: Category = {
    food: { title: 'Alimentação', color: '#F39237', expense: true },
    rent: { title: 'Aluguel', color: '#46237A', expense: true },
    other: { title: 'Outros', color: 'gray', expense: true },
    clothe: { title: 'Roupas', color: '#2176AE', expense: true },
    pix: { title: 'Pix', color: '#0EAA4A', expense: false },
    salary: { title: 'Salário', color: '#0EAA4A', expense: false }
}