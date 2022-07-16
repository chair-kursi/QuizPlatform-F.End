import React, { useEffect, useState } from 'react'
import Option from './Option'

export default function Question(props) {
    const { allQuestions, questionId } = props; 
    const [numberOfOptions, setNumberOfOptions] = useState(0);
    const [showOptions, setShowOptions] = useState(false);
    const [temporaryNumberOfOptions, setTemporaryNumberOfOptions] = useState(0);

    useEffect(() => { 
        allQuestions[questionId] = {
            options: [],
            score: 0,
            question: "",
            ans: 1
        } 
    }, [])
    
    return (
        <div className="quizmaker-question-format">
            <div className="quizmaker-question">
                <label htmlFor="">Question: </label>
                <input type="text" placeholder="Question . . ."
                    onChange={(e) => {
                        allQuestions[questionId].question = e.target.value; 
                    }} />
            </div>
            <div className="quizmaker-no-of-options">
                <label htmlFor="">Score :</label>
                <input type="number" placeholder="1, 10, .." onChange={(e) => {
                    allQuestions[questionId].score = parseInt(e.target.value);  
                }} /> 
            </div> 
            <div className="quizmaker-no-of-options">
                <label htmlFor="">No. of options :</label>
                <input type="number" disabled={showOptions} placeholder="1 - 5" onChange={(e) => {
                    setTemporaryNumberOfOptions(parseInt(e.target.value));
                    setShowOptions(false); 
                }} /> 
            </div> 
            <button disabled={showOptions} onClick={(e)=>{
                if(temporaryNumberOfOptions<1 || temporaryNumberOfOptions>5){
                    alert("Options can be only range from 1 to 5");
                    return;
                }
                e.preventDefault();
                setNumberOfOptions(temporaryNumberOfOptions);
                setShowOptions(true);
                allQuestions[questionId].options = [...Array(temporaryNumberOfOptions)]
            }}>{
                showOptions? "Saved" : "Save?"
            }</button>
            {
                numberOfOptions>0?  
                    [...Array(numberOfOptions)].map((ele, index)=>{
                        return <Option key = {index} allQuestions = {allQuestions} questionId = {questionId} optionId = {index}/>
                    })
                    :null
            }
            <div className="quizmaker-no-of-options">
                <label htmlFor="">Correct-Option :</label>{/*DO VALIDATION FOR INPUT gr8r than numberOfOptions*/}
                <input type="number" placeholder="Option No." onChange={(e) => {
                    const opt = parseInt(e.target.value);  
                    if(opt>numberOfOptions || opt<1)
                    {
                        alert("Invalid Correct-Option");
                        e.target.value = '';
                    }
                    allQuestions[questionId].answer = parseInt(e.target.value);  

                }} /> 
            </div> 
        </div>
    )
} 