import styled from 'styled-components';

export const MonthSelector = styled.div<{ textColor?: string, fontSize?: string }>`
    flex: 1;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 500px;
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.textColor};
`;

export const MonthSelectorArrow = styled.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
`;

export const MonthSelectorTitle = styled.div`
    flex: 1;
    text-align: center;
`;