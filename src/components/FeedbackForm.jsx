import React from 'react'
import {FeedbackContext} from '../context/FeedbackContext'
import {RatingSelect} from './'
import {Card, Button} from './shared'

export const FeedbackForm = () => {
  const [text, setText] = React.useState('')
  const [rating, setRating] = React.useState(10)
  const [btnDisabled, setBtnDisabled] = React.useState(true)
  const [message, setMessage] = React.useState('')

  const {addFeedback, feedbackEdit, updateFeedback} = React.useContext(FeedbackContext)

  React.useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
    
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating
      }

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }
      
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input 
            type="text" 
            placeholder='Write a review' 
            onChange={handleTextChange} 
            value={text} 
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}