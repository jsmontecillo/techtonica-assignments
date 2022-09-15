import React, {useState} from 'react';

const QuestionCard = (props) => {
    return (
        <div>
            <div>{props.result.question}</div>
        </div>
    )
}

export default QuestionCard;