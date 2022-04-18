import React from 'react';
import { View, Text, Image } from 'react-native';
import { useState } from 'react';
import { MyButton } from './myButton';
import { colors } from '../src/styles/colors';
import index from '../src/styles/index';

const imgA = require('../src/img/balloon_red.jpg');
const imgB = require('../src/img/popped_balloon_red.jpg');
const textos = [
  '"O importante não é vencer todos os dias, mas lutar sempre"',
  '"Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez."',
  '"O entusiasmo é a maior força da alma. Conserva-o e nunca te faltará poder para conseguires o que desejas."',
  '"As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente."',
  '"Quem ousou conquistar e saiu pra lutar, chega mais longe!"',
  '"Se A é o sucesso, então A é igual a X mais Y mais Z. O trabalho é X; Y é o lazer; e Z é manter a boca fechada."',
  '"Perder para a razão, sempre é ganhar."',
  '"Mesmo desacreditado e ignorado por todos, não posso desistir, pois para mim, vencer é nunca desistir."',
  '"Para ganhar aquilo que vale a pena ter, pode ser necessário perder tudo mais."',
  '"Ama-se mais o que se conquista com esforço."'
];

export const balaoDaSorte = () => {
  const [img, setImg] = useState(imgA);
  const [texto, setTexto] = useState('');
  const botaoEstouro = () => {
    let posicaoVetor = Math.floor(Math.random() * (textos.length - 0)) + 0;
    setImg(imgB);
    setTexto(textos[posicaoVetor]);
  };
  const botaoResetar = () => {
    setImg(imgA);
    setTexto('');
  };

  return (
    <View style={index.container}>
      <Image source={img} />
      <Text style={index.infoTexto}>
        {texto}
      </Text>
      <View>
        <MyButton
          texto='Estourar Balão'
          pressionado={botaoEstouro}
          cor={colors.vermelho}
        />
      </View>
      <View>
        <MyButton
          texto='Resetar'
          pressionado={botaoResetar}
          cor={colors.cinza} />
      </View>
    </View>
  );
}
export default balaoDaSorte;