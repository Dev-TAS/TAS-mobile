import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import getWindowSize from '../../assets/getWindowSize';

import styles from './styles'

interface carouselItem {
  item: {
    title: string
    description: string
  }
}

function AboutUs() {
  const {goBack} = useNavigation();

  const carouselItens = [
    {
      title: ' 01. Quem somos nós',
      description: 'Em 2016 dois jovens se conheceram na faculdade de Sistema de Informação, depois de alguma conversa, surgiu daquele encontro a TAS, Tecnologia Ambiental e Sustentabilidade. Com a intenção de criar tecnologias voltadas para a causa ambiental, Magnun e Matheus começaram como start up desenvolvendo pequenos projetos para educação ambiental. Em 2019 a TAS entrou no patamar de micro empresa.'

    },

    {
      title: '02. Nossa proposta',
      description: 'Acreditamos que o cuidado com o meio ambiente é extremamente necessário, principalmente nos dias atuais, e a forma mais fácil de contribuir efetivamente com o meio ambiente, são os centros de reciclagem. Por isso, pretendemos dar acesso á centros de reciclagem de forma fácil e incentivar seu uso.'
    }
  ];

  const windowWidth = getWindowSize();
  const itemWidth = (getWindowSize() - 100);

  function renderItem({item}: carouselItem) {
    return (
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  }

 return (
   <View style={styles.container}>
     <Carousel
      layout={'default'}
      data={carouselItens}
      sliderWidth={windowWidth}
      itemWidth={itemWidth}
      renderItem={renderItem}
     />
      <RectButton 
        style={styles.button}
        onPress={goBack}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </RectButton>
   </View>
 );
}

export default AboutUs;