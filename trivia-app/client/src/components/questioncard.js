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
            <div dangerouslySetInnerHTML={ {__html: props.result.question} } style={{fontSize: "25px"}} /><br/>
            <fieldset onChange={props.choice}>
                <input type="radio" id="1" name="answer" value={shuffled[0].isCorrect}/>
                <label for="1" dangerouslySetInnerHTML={ {__html: shuffled[0].text} } /><br/>
                <input type="radio" id="2" name="answer" value={shuffled[1].isCorrect}/>
                <label for="2" dangerouslySetInnerHTML={ {__html: shuffled[1].text} } /><br />  
                <input type="radio" id="3" name="answer" value={shuffled[2].isCorrect}/>
                <label for="3" dangerouslySetInnerHTML={ {__html: shuffled[2].text} } /><br />
                <input type="radio" id="4" name="answer" value={shuffled[3].isCorrect}/>
                <label for="4" dangerouslySetInnerHTML={ {__html: shuffled[3].text} }/>
            </fieldset>
        </div>
    )
}

export default QuestionCard;