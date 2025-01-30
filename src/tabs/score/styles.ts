import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  
`;

export const Title = styled.Text`
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    color: #FF6500;
    margin-top: 150px;
`

export const Subtitle = styled.Text`
    font-size: 18;
    text-align: center;
    margin-bottom: 20px;
    color: #fff;
`

export const Button = styled.TouchableOpacity`
    border-radius: 6px;
    background-color: #0B192C;
    padding: 10px 30px;
`
export const ButtonText = styled.Text`
  color: #FF6500;
  font-size: 20px;
  font-weight: bold;
`;

export const QuestionContainer = styled.View`
    width: 80%;
    padding: 10px;
    margin: 5px 0;
    border: 3px solid #0B192C;
    border-radius: 10px;
`;

export const QuestionTitle = styled.Text`
    color: #000;
    text-align: start;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const QuestionText = styled.Text`
    color: #000;
    text-align: start;
    font-size: 20px;
    font-weight: bold;
`;