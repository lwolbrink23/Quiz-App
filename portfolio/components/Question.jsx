import { Text, View, Button } from 'react-native';
import { useState } from 'react'
import { ButtonGroup } from 'react-native-elements/'

export default function Question({ navigation, route }){
  // accepts the three params from Home.jsx
  const { firstName, lastName, email } = route.params;
  
    const data = [
    {
    prompt: "This is the question...",
    type: "multiple-choice",
    choices: [
        "choice 1",
        "choice 2",
        "choice 3",
        "choice 4",
    ],
    correct: [0]
    },
    {
    prompt: "This is another question...",
    type: "multiple-answer",
    choices: [
        "choice 1",
        "choice 2",
        "choice 3",
        "choice 4",
    ],
    correct: [0,2]
    },
    {
    prompt: "This is the third question...",
    type: "true-false",
    choices: [
        "choice 1",
        "choice 2",
    ],
    correct: [1]
    }
    ]
    // useState variables
    const [currentIndex, setIndex] = useState(0);
    const [buttonGroupSelectedIndexes, setButtonGroupSelectedIndexes] = useState([]);
    const [points, setPoints] = useState(0);
    const currentQuestion = data[currentIndex];
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    
    const handleAnswerClick = (index) => {
      // Checks if the buttonGroupSelectedIndexes state already includes the selected index.
      // If it does, then it removes the index using the filter function
      if (currentQuestion.type === "multiple-answer") {
        setButtonGroupSelectedIndexes(buttonGroupSelectedIndexes.includes(index) ? 
          buttonGroupSelectedIndexes.filter(item => item !== index) : 
          [...buttonGroupSelectedIndexes, index]);
      }
      else {
        // sets buttonGroupSelectedIndexes to an array containing the selected index if it is not already included
        setButtonGroupSelectedIndexes(buttonGroupSelectedIndexes.includes(index) ? [] : [index]);
      }
    };

    const handleNextQuestion = () => {
      if (buttonGroupSelectedIndexes.length !== 0) {
        // selected answers are added to the array
        let tempAnswers = selectedAnswers;
        tempAnswers.push(buttonGroupSelectedIndexes);
        setSelectedAnswers(tempAnswers);

        // Move to the next question
        setIndex(currentIndex + 1);
        setButtonGroupSelectedIndexes([]);
      }
    };
    
    const handleSubmit = () => {
      if (buttonGroupSelectedIndexes.length !== 0) {
        // when the user clicks submit, their selected answers are added to the array 'buttonGroupSelectedIndexes'
        let tempAnswers = selectedAnswers;
        tempAnswers.push(buttonGroupSelectedIndexes);
        setSelectedAnswers(tempAnswers);
        // then the user is sent to the Summary component
        navigation.navigate('Summary', { selectedAnswers, data, email })
        setButtonGroupSelectedIndexes([])
      }
  }

    return(
        <View>
        <View style={{alignItems: 'center'}}>
        <Text>{firstName} {lastName}'s Quiz</Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {currentQuestion?.prompt}
        </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>

          <ButtonGroup
            buttons={currentQuestion.choices}
            onPress={(index) => {
              handleAnswerClick(index);
            }}
            testID="choices"
            selectedIndexes={buttonGroupSelectedIndexes}
            vertical={true}
            buttonStyle={{ paddingVertical: 10, marginVertical: 10 }}
          />

        </View>

        <View>
            {currentIndex === data.length - 1 ? (
          <Button title="Submit" onPress={handleSubmit} />
        ) : (
            <Button testID="next-question" title="Next" onPress={handleNextQuestion} />
          )}
        </View>
    </View>
    )
}