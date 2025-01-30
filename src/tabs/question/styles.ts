import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    padding: 16px;
  
`;

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 50;
    text-align: center;
    color: #FF6500;
`

export const Question = styled.Text`
    font-size: 23px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    color: #FF6500;
`

export const Button = styled.TouchableOpacity`
   background-color: #0B192C;
    margin: 8px 0;
    padding: 12px;
    border-radius: 8px;
`
export const ButtonText = styled.Text`
    color: #FF6500;
    font-size: 20px;
    font-weight: bold;
    text-align: start;
`;

export const ContainerNumber = styled.View`
    margin: 5px auto;
    justify-content: center;
    background-color: #0B192C;
    border: 2px solid #FF6500;
    border-radius: 50%;
    width: 50px;
    height: 50px;
`;

export const Number = styled.Text`
    color: #FF6500;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
`;

