import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {FeedbackContext} from '../context/FeedbackContext'
import {FeedbackItem} from './'

export const FeedbackList = () => {
  const {feedback} = React.useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div 
            key={item.id}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
          >
            <FeedbackItem 
              key={item.id} 
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
  
  //return (
  //  <div className='feedback-list'>
  //    {feedback.map((item) => (
  //      <FeedbackItem  
  //        key={item.id} 
  //        item={item} 
  //        handleDelete={handleDelete} 
  //      />
  //    ))}
  //  </div>
  //)
}