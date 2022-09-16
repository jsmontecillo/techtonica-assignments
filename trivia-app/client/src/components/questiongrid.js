import React, {useState, useRef} from 'react';
import "./questiongrid.css";
import QuestionCard from "./questioncard";
import audio from "./wii.mp3";
import snoop from "./snoop.gif";
import {decode} from 'html-entities';

const QuestionGrid = () => {
    const [questionData, setQuestions] = useState(null);
    const [toggleQuestion, changeQuestion] = useState(0);
    const [topicData, changeTopic] = useState("general");
    const score = useRef(0);
    const target = useRef();

    decode('&lt; &gt; &quot; &apos; &amp; &#169; &#8710;');

    const handleSubmit = (e) => {
        e.preventDefault();
        new Audio(audio).play();

        fetch(`http://localhost:4040/api/trivia/${topicData}`)
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
        target.current.checked = false;
        if(toggleQuestion > -1 && toggleQuestion < 5){
            changeQuestion(toggleQuestion+1);
        } else if (toggleQuestion === 5) {

        }
    }

    const handleChange = (e) => {
        changeTopic(e.target.value);
    }

    const choice = (e) => {
        if(e.target.value === "true"){
            score.current += 1;
            console.log(score.current);
        }
        target.current = e.target;
    }
    console.log(score.current);

    return (
        <>
            <div className="questions">
                <div>
                    { questionData ? questionData  === "404" ? (
                `Invalid`
            ) : (
                <>
                {toggleQuestion < 5 ? (
                    <>
                    <QuestionCard result={questionData.results[toggleQuestion]} choice={choice}/>
                    <form onSubmit={handleQuestion}>
                        <input type="submit" value="NEXT" className="button-53" onSubmit={handleQuestion} />
                    </form>
                </>
                ) : (
                    <>
                        <p>Score: {(score.current/5)*100}%</p>
                        <p>Now let's vibe.</p>
                        <img src={snoop} alt="dancing" />
                    </>
                )}
                </>
            ) : (
                <>
                    <form onSubmit={handleSubmit}>
                        <select name="topic" id="topic" value={topicData} onChange={handleChange}>
                            <option value="general">General Knowledge</option>
                            <option value="animals">Animals</option>
                            <option value="art">Art</option>
                            <option value="music">Music</option>
                            <option value="mythology">Mythology</option>
                            <option value="history">History</option>
                            <option value="math">Math</option>
                        </select><br/>
                        <input type="submit" value="START" className="button-53" onSubmit={handleSubmit}/>
                    </form><br />
                    <p style={{fontSize: "30px"}}>Welcome!</p>
                </>
                )
            }
                </div>
            </div>
        </>
    )
};

export default QuestionGrid;
