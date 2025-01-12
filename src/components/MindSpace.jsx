import React, { useState } from 'react';
import BreathingExercise from './BreathingExercise';
import MoodTracker from './MoodTracker';

const MindSpace = ({onBirdAnimation}) => {
    const [selectedMood, setSelectedMood] = useState(null);
    const [selectedActivity, setSelectedActivity] = useState(null);

    if(selectedActivity){
        return <BreathingExercise />
    }
  return (

    
    <div className='flex items-center justify-center mt-16 flex-col '>
        <h1 className='text-blue-500 text-4xl text-bold uppercase font-bold  tracking-wider'>Mind Space</h1> <br />
        <p className='text-xl font-bold text-gray-600'>رحلتك نحو السلام الداخلي</p>
        <MoodTracker  selectedMood={selectedMood} onMoodSelect={setSelectedMood} onActivitySelect={setSelectedActivity} onBirdAnimation={onBirdAnimation}/>
    </div>

   
  )
}

export default MindSpace
