import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../tabs/welcome/welcomeScreen';
import QuestionScreen from '../tabs/question/QuestionScreen';
import ScoreScreen from '../tabs/score/ScoreScreen';


const Stack = createStackNavigator();

export default function Routes() {
  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#1E3E62',
        }
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen
        name="Question"
        component={QuestionScreen}
        options={{ title: "Pergunta" }} 
      />
      <Stack.Screen
        name="Score"
        component={ScoreScreen}
        options={{ title: "Pontuação Final" }} 
      />
    </Stack.Navigator>
  );
}