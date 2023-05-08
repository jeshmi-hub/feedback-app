import {motion, AnimatePresence} from 'framer-motion'
import React, { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

function FeebackList() {
  const {feedback} = useContext(FeedbackContext)
    if(!feedback || feedback.lenght===0){
        return <p>No feedback Yet</p>
    }

    return(
      <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((item)=>(
          <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity: 0}}>
          <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
        </AnimatePresence>
      </div>
    )
    
//  return (
  //  <div className='feedback-list'>
    //  {feedback.map((item)=>(
      //  <FeedbackItem key={item.id} item={item}
       // handleDelete={handleDelete}/>

     // ))}
    //</div>
 // )
}



export default FeebackList
