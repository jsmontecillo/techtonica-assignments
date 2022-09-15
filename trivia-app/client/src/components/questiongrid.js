import React, {useState} from 'react';
import "./questiongrid.css";
import QuestionCard from "./questioncard"
import audio from "./wii.mp3"

const QuestionGrid = () => {
    const [questionData, setQuestions] = useState(null);
    const [toggleQuestion, changeQuestion] = useState(0);
    const [topicData, changeTopic] = useState("Art");

    const handleSubmit = (e) => {
        e.preventDefault();
        new Audio(audio).play();
        fetch("http://localhost:4040/api/trivia")
        .then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error("Bad response");
            }
        })
        .then((data) => {
            setQuestions(data);
        })
    }

    const handleQuestion = (e) => {
        e.preventDefault();
        if(toggleQuestion > -1 || toggleQuestion < 5){
            changeQuestion(toggleQuestion+1);
        }
    }
    console.log(questionData);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <select name="topic" id="topic">
                    <option value="Art">Art</option>
                </select>
                <input type="submit" value="START" onSubmit={handleSubmit}/>
            </form>
            <div className="questions">
                <div>
                    <p>Questions</p>
                    { questionData ? questionData  === "404" ? (
                `Invalid`
            ) : (
                <>
                <QuestionCard result={questionData.results[toggleQuestion]}/>
                    <form onSubmit={handleQuestion}>
                        <input type="submit" value="NEXT" onSubmit={handleQuestion} />
                    </form>
                </>
            ) : (
                <p style={{fontSize: "30px"}}>Welcome!</p>
                )
            }
                </div>
            </div>
        </>
    )
};

export default QuestionGrid;
