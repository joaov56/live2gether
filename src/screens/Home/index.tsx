

import { Balance } from '../../components/Balance';
import * as S from './styles'

export function Home(){
    return (
        <S.StyledView>
            <Balance text='receita' value='10,00'/>
            <Balance text='receita' value='10,00'/>
        </S.StyledView>
    );
}