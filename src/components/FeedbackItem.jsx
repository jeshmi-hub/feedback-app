import {FaTimes, FaEdit} from 'react-icons/fa';
import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={()=>deleteFeedback(item.id)} className='close'>
        <FaTimes color='green'/>
      </button>
      <button onClick={()=>editFeedback(item)} className='edit'>
        <FaEdit color='green'/>
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propType = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
