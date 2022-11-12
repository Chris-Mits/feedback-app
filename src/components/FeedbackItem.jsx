import React from 'react'
import {FeedbackContext} from '../context/FeedbackContext'
import {FaTimes, FaEdit} from 'react-icons/fa'
import PropTypes from 'prop-types'
import {Card} from './shared'

export const FeedbackItem = ({item}) => {
  const {deleteFeedback, editFeedback} = React.useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color='purple' />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,

}