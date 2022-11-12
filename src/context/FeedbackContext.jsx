import React from 'react'
import {v4 as uuidv4} from 'uuid'

export const FeedbackContext = React.createContext(null)

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = React.useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 10
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 9
    },
    {
      id: 3,
      text: 'This is feedback item 3',
      rating: 7
    },
  ])
  const [feedbackEdit, setFeedbackEdit] = React.useState({
    item: {},
    edit: false
  })

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback(prevFeedback => [newFeedback, ...prevFeedback])
  }

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(prevFeedback => prevFeedback.filter(item => id !== item.id))
    }
  }

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  // Update feedback item
  const updateFeedback = (id, updatedItem) => {
    setFeedback(prevFeedback => prevFeedback.map(item => {
      return item.id === id ? {...item, ...updatedItem} : item
    }))
    console.log(id, updatedItem)
  }

  return (
    <FeedbackContext.Provider 
      value={{
        feedback: feedback,
        feedbackEdit: feedbackEdit,
        addFeedback: addFeedback,
        deleteFeedback: deleteFeedback,
        editFeedback: editFeedback,
        updateFeedback: updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}