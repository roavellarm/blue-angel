import  React from 'react';
import {useNavigation} from '@react-navigation/native';
import fader from '../../../assets/images/backgrounds/fader.png'
import Container from '../../../components/Container'
import * as S from './styles';

export default function Page1(){
    const options = [4, 3, 2, 1]
    const text = 'Cada nível é dividido com o número de sílabas'

    const handleChoice = (choice) =>{
        return navigate({name: '', params: {choice}})
    }

    return(
        <Container>
            <S.Text>{text}</S.Text>

            <S.ImageBackground source={faderImg} resizeMode= "contain">
               {options.map((option)=>(
                   <S.Button key={option} onPress={()=>handleChoice(option)}>
                       <S.Button>{option}</S.Button>
                   </S.Button>
               ))} 

            </S.ImageBackground>
        </Container>
        
    )
}

