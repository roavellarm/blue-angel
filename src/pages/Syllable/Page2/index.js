import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Container from '../../../components/Container'
import * as S from './styles';
                                                                                    

const text = [{prayer:'Palavras com duas sílabas:'},
              {prayer:'Palavras com quatro sílabas:'},
              {prayer:'Palavras com cinco sílabas:'}]

const showPrayers = () =>
  prayers.map((letter, index) =>
     prayers.length === index + 1 ?
     prayer : `${prayer}`) 
     
  export default function Page2({route}){
    const { choice } = route.params
    const { navigate } = useNavigation()
    const { prayers } = options[choice-1]
    const timeout = (delay) => new Promise((res) => setTimeout(res, delay))

    const wait = async () => {
      await timeout(5000)
    
      return navigate({ name: '', params: route.params })
    }   
      return(
        <Container color="#9b4acd">
        <S.Text>{showPrayers()}</S.Text> 
       </Container>
      )
   
  }             
