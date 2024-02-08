import React from 'react';
import './InterviewQuestions.css';
import Quiz from '../Quiz/Quiz';
import { jsQuizz } from '../../Data/Data';
import Quiz2 from '../Quiz/Quiz2';
import { htmlQuizz } from '../../Data/Data2';
import Quiz3 from '../Quiz/Quiz3';
import { expressQuizz } from '../../Data/Data3';
import Quiz4 from '../Quiz/Quiz4';
import { nodeQuizz } from '../../Data/Data4';
import Quiz5 from '../Quiz/Quiz5';
import { mongodbQuizz } from '../../Data/Data5';
import Quiz6 from '../Quiz/Quiz6';
import { javascriptQuizz } from '../../Data/Data6';
import Quiz7 from '../Quiz/Quiz7';
import { cssQuizz } from '../../Data/Data7';

const InterviewQuestions = () => {
    return (
        <div className='interview-question-container'>
            <h1 className='interview-title'>Interview Questions <span>.</span> </h1>
            {/* React */}
            <Quiz questions={jsQuizz.questions} />
            {/* Express   */}
            <Quiz3 questions={expressQuizz.questions} />
            {/* Node  */}
            <Quiz4 questions={nodeQuizz.questions} />
            {/* Mongo  */}
            <Quiz5 questions={mongodbQuizz.questions} />
            {/* JavaScript  */}
            <Quiz6 questions={javascriptQuizz.questions} />
            {/* HTML */}
            <Quiz2 questions={htmlQuizz.questions} />
            {/* CSS  */}
            <Quiz7 questions={cssQuizz.questions} />
        </div>
    )
}

export default InterviewQuestions