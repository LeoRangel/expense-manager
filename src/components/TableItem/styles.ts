import styled from 'styled-components';

export const TableLine = styled.tr`
    display: flex;
    flex-direction: column;
`;

export const TableDate = styled.tr`
    color: rgba(0,0,0,.5);
    font-size: .9rem;
    padding: 20px 30px;
`;

export const TableColumn = styled.td`
`;

export const ItemRow = styled.td`
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    padding-top: 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);

    // &:last-child{
    //     border-bottom: 0;
    // }
`;

export const Category = styled.div`
    display: flex;
    align-items: center;
`;

export const CategoryIcon = styled.div<{ color: string }>`
    padding: 10px;
    border-radius: 50%;
    color: #FFF;
    background-color: ${props => props.color};
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Value = styled.div<{ color: string }>`
    color: ${props => props.color};
    text-align: end;

    span {
        color: rgba(0,0,0,.5);
        font-size: .9rem;
    }
`;