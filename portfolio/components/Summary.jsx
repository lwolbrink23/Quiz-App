import { Text, View } from 'react-native';

    function isArraysEqual(Array1, Array2) {
        if (Array1.length !== Array2.length) {
            return false;
        } 
        else {
            return Array1.every(item => Array2.includes(item));
        }
    }

    function totalPoints(questions, answers)
    {
       if (questions.length !== answers.length)
            throw err("length of questions does not match length of answers.");

        var points = 0;
        for (let i = 0; i < questions.length; i++)
        {
           if (isArraysEqual(questions[i].correct, answers[i]))
            points++;
        }
        return points;

    }

    function correctAnswer(question) {
        // write a function that returns the correct answer for one question
        return question.correct.map((index) => question.choices[index]).join(", ");
    }

    function yourAnswer(question, selectedAnswers, index) {
        // write a function that returns the user's chosen answer for one question
        const selected = selectedAnswers[index];
        if (question.type === "multiple-choice" || question.type === "true-false") {
            if (isArraysEqual(question.correct, selected))
            return <Text style={{fontWeight: "bold"}}>{question.choices[selected]}</Text>
            else return <Text style={{textDecorationLine: "line-through"}}>{question.choices[selected]}</Text>
        } else if (question.type === "multiple-answer") {
            if (isArraysEqual(question.correct, selected))
            return <Text style={{fontWeight: "bold"}}>{selected.map((index) => question.choices[index]).join(", ")}</Text>
            else return <Text style={{textDecorationLine: "line-through"}}>{selected.map((index) => question.choices[index]).join(", ")}</Text>
        }
    }

    function YesNo(value)
    {
        if (value === true)
        return "Yes";
        else
        return "No";
    }

export default function Summary({ route }){
    const { selectedAnswers, data } = route.params;
    return(
        <View style={{alignItems: 'center'}}>
        <Text testID="total" style={{paddingVertical: 10}} >Total Points: {totalPoints(data, selectedAnswers)}</Text>
        {data.map((question, index) => (
                <View key={index}>
                    <Text style={{paddingVertical: 10}}>{question.prompt}</Text>
                    <Text>Correct answer: {correctAnswer(question)}</Text>                  
                    <Text>Your answer: {yourAnswer(question, selectedAnswers, index)}</Text>  
                    <Text>Were you correct?  ::  {YesNo(isArraysEqual(question.correct, selectedAnswers[index]))}</Text>
                </View>
            ))}
        </View>
    )
}