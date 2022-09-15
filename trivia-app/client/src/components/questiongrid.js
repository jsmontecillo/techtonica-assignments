import React, {useState} from 'react';
import "./questiongrid.css";
import QuestionCard from "./questioncard"

const QuestionGrid = () => {
    const [questionData, setQuestions] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();

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
    console.log(questionData);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="submit" value="Get Questions" onSubmit={handleSubmit}/>
            </form>
            <div className="questions">
                <div>
                    <p>Questions</p>
                    { questionData ? questionData  === "404" ? (
                `Invalid`
            ) : (
                <>
                  
                    <div>
                        {questionData.results[0].question}
                    </div>
                    <QuestionCard result={questionData.results[0]}/>
                  {/* {questionData.results.map((result, index) => {
                        <QuestionCard key={index} question={result}/>
                    })} */}

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
