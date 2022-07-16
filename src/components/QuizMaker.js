import React, { useState } from 'react'
import Question from './Question'
import '../css/quizMaker.css'
import { Link } from 'react-router-dom';

export default function QuizMaker() { 
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);
    const [temporaryNumberOfQuestions, setTemporaryNumberOfQuestions] = useState(0);
    const [showQuestion, setShowQuestion] = useState(false);
    const [allQuestions, setAllQuestions] = useState([]);
    const [title, setTitle] = useState('');
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);

    const submitQuiz = () => {
        let quiz;
        quiz={
            questions : allQuestions,
            title: title,
            time: {
                start: start,
                end: end
            }
        }
        console.log({quiz});
    }

    return (
        <div className="quizmaker-container">
            <div className="quizmaker-main-container">
                <div className="quizmaker-heading">
                    <h1>Create your own customized quiz</h1>
                </div>
                <div className="quizmaker-title-time">
                    <div className="quizmaker-title">
                        <label htmlFor="">Title </label>
                        :<input type="text" placeholder="Add Quiz title" onChange={(e)=>{
                            setTitle(e.target.value);
                        }}/>
                    </div>
                    <div className="quizmaker-time">
                        <label htmlFor="">Start-Time </label>
                        :<input type="datetime-local" placeholder="Start at" onChange={(e)=>{
                            console.log(e.target.value);
                            setStart(e.target.value);
                        }}/>
                    </div>
                    <div className="quizmaker-time">
                        <label htmlFor="">End-Time </label>
                        :<input type="datetime-local" placeholder="End at" onChange={(e)=>{
                            setEnd(e.target.value);
                        }}/>
                    </div>
                </div>
                <div className="quizmaker-no-of-questions">
                    <label htmlFor="">No. of questions :</label>
                    <input disabled={showQuestion} type="number" placeholder="1-50" onChange={(e) => {
                        setTemporaryNumberOfQuestions(parseInt(e.target.value));//SAVING THE TEMPORARY VALUE 
                        // setShowQuestion(false);
                    }} />
                </div>
                <button disabled={showQuestion} onClick={(e) => {
                    if(temporaryNumberOfQuestions<1 || temporaryNumberOfQuestions>50){
                        alert("Options can be only range from 1 to 50");
                        return;
                    }
                    e.preventDefault();
                    setNumberOfQuestions(temporaryNumberOfQuestions);//SETTING FINAL NUMBER OF QUESTIONS
                    setAllQuestions([...Array(numberOfQuestions)]);//SET QUESTIONS ARR EMPTY
                    setShowQuestion(true);
                }}>{
                    showQuestion? "Saved" : "Save?"
                }</button>
                {
                    showQuestion?<button onClick={(e)=>{
                        e.preventDefault();
                        setNumberOfQuestions(0);
                        setAllQuestions([]);
                        setShowQuestion(false);
                    }}>Clear?</button>: ""
                }
                {
                    numberOfQuestions>0 ? 
                    [...Array(numberOfQuestions)].map((ele, index) => {
                        return <Question key = {index} allQuestions = {allQuestions} questionId = {index}/>
                    }): null
                }
                {
                    numberOfQuestions?
                    <button onClick={(e)=>{
                        e.preventDefault();
                        submitQuiz();
                    }}>Submit</button>:null
                }
            </div>
            <Link to = '/login'>Login</Link>
        </div>
    )
}