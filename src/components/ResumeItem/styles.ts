import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 30px;
`;

export const Title = styled.div`
    font-weight: bold;
    color: rgba(0,0,0,.5);
    // font-size: .9rem;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: baseline;
`;

export const ResumeIcon = styled.div`
    margin-top: 2px;
    margin-left: 5px;
`;

export const Info = styled.div<{ color?: string }>`
    text-align: center;
    font-weight: bold;
    color: ${props => props.color ?? '#000'};
`;