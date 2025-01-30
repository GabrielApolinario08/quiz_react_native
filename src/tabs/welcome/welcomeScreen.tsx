import React from 'react';
import { Container, Subtitle, Title, Button, ButtonText } from './styles';

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <Container>
      <Title>Bem-vindo ao Quiz Starcatcher!</Title>
      <Subtitle>Teste seus conhecimentos e divirta-se.</Subtitle>
      <Button
        onPress={() => navigation.navigate('Question', { questionIndex: 0, score: 0 })}
      ><ButtonText>Iniciar</ButtonText></Button>
    </Container>
  );
};
export default WelcomeScreen;