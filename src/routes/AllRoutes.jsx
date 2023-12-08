import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeComponent from '../components/HomeComponent'
import QuizComponent from '../components/QuizComponent'
import ResultComponent from '../components/ResultComponent'
import data from '../resources/quizQuestions.json'

const AllRoutes = ({score , handleScore, handleAttempt,attempt}) => {
  return (
    <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='/game' element={<QuizComponent data={data} handleScore={handleScore} handleAttempt={handleAttempt} />}/>
        <Route path='/result' element={<ResultComponent score={score} attempt={attempt}/>}/>
    </Routes>
  )
}

export default AllRoutes
