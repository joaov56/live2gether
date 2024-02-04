import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    
    flex-direction: row;
    align-items: center;

    background-color: white;

    max-width: 100px;

    box-shadow: 2px 2px 5px  rgba(212,212,212,1);

    border-radius: 4px;    
`

export const TextContainer = styled.View` 
`
export const BalanceText = styled.Text`
    font-size: 10px;

    margin-bottom: 4px;

    color: gray;
`;

export const BalanceValue = styled.Text`
    font-size: 14px;
`