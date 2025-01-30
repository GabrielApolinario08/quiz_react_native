import React from 'react';
import { ScrollView } from 'react-native';
import { Button, ButtonText, Container, Subtitle, Title, QuestionContainer, QuestionText, QuestionTitle } from './styles';


const ScoreScreen = ({ route, navigation }: any) => {
  const { score, totalQuestions, revision } = route.params;
  return (
    <ScrollView>
      <Container>

        <Title>Parabéns!</Title>
        <Subtitle>
          Você acertou {score} de {totalQuestions} perguntas!
        </Subtitle>
        <Button
          onPress={() => navigation.navigate('Welcome')}
        >
          <ButtonText>Jogar Novamente!</ButtonText>
        </Button>


        <Title>Revisão:</Title>
        {revision.map((item:any, index:any) => {
          const backgroundColor = item.response === item.correct ? '#86f39f' : '#eeacb1';
          return (
            <QuestionContainer
              key={index}
              style={{
                backgroundColor,
              }}
            >
              <QuestionTitle>{item.question}</QuestionTitle>
              <QuestionText>Resposta: {item.response}</QuestionText>
              <QuestionText>Correto: {item.correct}</QuestionText>
            </QuestionContainer>
          );
        })}
      </Container>
    </ScrollView>
  );
};

export default ScoreScreen;