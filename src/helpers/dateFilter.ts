import { Item } from '../types/Item';

export const getCurrentMonth = () => {
    let now = new Date()
    // Months in js start at 0, so use +1
    return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = []
    // Sample date value: 2021-12
    let [year, month] = date.split('-')

    for (let i in list) {
        if (
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    }

    return newList
}