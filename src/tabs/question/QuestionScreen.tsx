import React, { useState } from 'react';
import questions from '../../data/questions';
import { Button, ButtonText, Container, Question, Number, ContainerNumber } from './styles';

interface Review {
  number: string;
  question: string;
  response: string;
  correct: string;
}

const QuestionScreen = ({ route, navigation }: any) => {
  const [revision, setRevision] = useState<Review[]>([]); 
  const { questionIndex, score } = route.params;
  const question = questions[questionIndex];

  const handleAnswer = (selectedAnswer: string) => {
    const isCorrect = selectedAnswer === question.answer;
    const newScore = isCorrect ? score + 1 : score;

  
    const updatedRevision = [
      ...revision,
      {
        number: question.number,
        question: question.question,
        response: selectedAnswer,
        correct: question.answer,
      },
    ];

    setRevision(updatedRevision);

    
    if (questionIndex < questions.length - 1) {
      navigation.navigate('Question', {
        questionIndex: questionIndex + 1,
        score: newScore,
        revision: updatedRevision, 
      });
    } else {
      navigation.navigate('Score', { 
        score: newScore, 
        totalQuestions: questions.length, 
        revision: updatedRevision, 
      });
    }
  };

  const letters = ['a', 'b', 'c', 'd'];

  return (
    <Container>
      <ContainerNumber>
        <Number>{question.number}</Number>
      </ContainerNumber>

      <Question>{question.question}</Question>
      {question.options.map((alternative, index) => (
        <Button
          key={index}
          onPress={() => handleAnswer(alternative)} 
        >
          <ButtonText>{`${letters[index]}) ${alternative}`}</ButtonText>
        </Button>
      ))}
    </Container>
  );
};

export default QuestionScreen;