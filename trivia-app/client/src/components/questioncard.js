import React, {useState} from 'react';

const QuestionCard = (props) => {
    let answers = [];
    answers.push({text: props.result.correct_answer, isCorrect: true});
    props.result.incorrect_answers.map((item)=>answers.push({text: item, isCorrect: false}));
    let shuffled = answers.sort((a,b)=>{
         return 0.5 - Math.random();
    })
    console.log(shuffled);
    return (
        <div>
            <div style={{fontSize: "25px"}}>{props.result.question}</div><br/>
            <fieldset onChange={props.choice}>
                <input type="radio" id="1" name="answer" value={shuffled[0].isCorrect}/>
                <label for="1">{shuffled[0].text}</label><br/>
                <input type="radio" id="2" name="answer" value={shuffled[1].isCorrect}/>
                <label for="2">{shuffled[1].text}</label><br />  
                <input type="radio" id="3" name="answer" value={shuffled[2].isCorrect}/>
                <label for="3">{shuffled[2].text}</label><br />
                <input type="radio" id="4" name="answer" value={shuffled[3].isCorrect}/>
                <label for="4">{shuffled[3].text}</label>
            </fieldset>
        </div>
    )
}

export default QuestionCard;