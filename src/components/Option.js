import React from 'react'

export default function Option(props) {
    const {
        allQuestions, 
        questionId, 
        optionId
    } = props; 
    return (
        <div className="quizmaker-options">
            {/* <span>{optionId+1}.</span> */}
            <input type="text " placeholder={"Option "+(optionId+1)} onChange={(e)=>{ 
                allQuestions[questionId].options[optionId] = e.target.value; 
            }} />
        </div>
    )
}