import { button, div } from "framer-motion/client";
import { useState, useEffect } from "react";
import { Wind, Heart, ArrowRight, Timer } from 'lucide-react';
import BreathingExercise from "./BreathingExercise";


const moods = [
    { emoji: '😊', activities: ['تمارين تنفس للسعادة', 'تأمل الامتنان'],sound: ('../sounds/birds.mp3') },
    { emoji: '😌', activities: ['تمارين استرخاء', 'تأمل هادئ'], sound: ('../sounds/birds.mp3')  },
    { emoji: '😐', activities: ['تمارين تنفس للتوازن', 'تأمل التركيز'], sound: ('../sounds/birds.mp3')  },
    { emoji: '😕', activities: ['تمارين تخفيف القلق', 'تأمل التهدئة'], sound: ('../sounds/birds.mp3')  },
    { emoji: '😢', activities: ['تمارين تنفس عميق', 'تأمل للراحة النفسية'] , sound: ('../sounds/birds.mp3') }
  ];



const MoodTracker = ({selectedMood, onMoodSelect, onActivitySelect, onBirdAnimation}) => {
  const[audio, setAudio] = useState(null);
  const[showActivities, setshowActivities] = useState(false);
  // const[breathExercise, setBreathExercise] = useState(false);

  
  const handleMoodSelect = (mood)  =>{
    onMoodSelect(mood);
    setshowActivities(true);
    setAudio( new Audio( mood.sound))
  // استدعاء الدالة لإيقاف الأنيميشن


  }

  const handleSlectedActivty = (activity) =>{
    onBirdAnimation(); 
    onActivitySelect(activity);
  }

  useEffect(() => {
    if (audio) {
      audio.play(); // تشغيل الصوت عند تغيير المزاج
    }
    return () => {
      if (audio) audio.pause(); // إيقاف الصوت عند الخروج
    };
  }, [audio]);



  return (
    <div className=" mt-7 mx-auto bg-white p-6  text-center rounded-lg border border-gray-300 shadow-lg">
        <h1 className="text-center text-xl mb-4">كيف تشعر اليوم</h1>
        {moods.map((mood, index)=>(
          <button
          className="text-4xl mt-5 mr-6 mb-4"
          onClick={() => handleMoodSelect(mood)}

          key={index}
          
          > {mood.emoji}</button>
        ))}



        {showActivities && selectedMood &&(
          <div>
             <h4 className="text-lg font-medium text-center mb-8 ">
              نقترح عليك هذه الأنشطة لتحسين مزاجك
            </h4>
            {selectedMood.activities.map((activity,index)=> (
              <button
              key={index}
              onClick={handleSlectedActivty}
              className=" mb-5 w-full p-4 bg-white border border-gray-200 rounded-lg hover:bg-blue-50 transition-all flex justify-between items-center">
                <span>{activity}</span>
                <ArrowRight className="h-5 w-5 text-blue-500"  />
              </button>
            ))}
        </div>
        )}
        {/* {breathExercise && <BreathingExercise />} */}
      
    </div>
  )
}

export default MoodTracker



