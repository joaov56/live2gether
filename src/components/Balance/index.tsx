import * as S from './styles'
import { Text } from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface BalanceProps {
    text: string;
    value: string;

}

export function Balance({text, value}: BalanceProps){
    return (
        <S.Container>
            <MaterialIcons name="attach-money" color={'black'} size={32} />

            <S.TextContainer>
                <S.BalanceText>{text}</S.BalanceText>
                <S.BalanceValue>R$ {value}</S.BalanceValue>
            </S.TextContainer>
        </S.Container>
    )
}