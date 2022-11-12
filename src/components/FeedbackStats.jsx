import React from 'react'
import {FeedbackContext} from '../context/FeedbackContext'

export const FeedbackStats = () => {
  const {feedback} = React.useContext(FeedbackContext)
  let sumRating = feedback.reduce((acc, curr) => acc + curr.rating, 0)
  let avgRating = sumRating / feedback.length
  avgRating = avgRating.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {Number.isNaN(avgRating) ? 0 : avgRating}</h4>
    </div>
  )
}