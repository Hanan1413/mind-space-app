import  { useState, useEffect } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
import { Wind, Timer } from 'lucide-react';

const BreathingExercise = ({ activity }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentPhase, setCurrentPhase] = useState('inhale');
  const [audio] = useState(new Audio('/sounds/nature-sounds.mp3')); // تحميل الصوت عند بداية التمرين

  useEffect(() => {
    // تشغيل الصوت عندما يبدأ التمرين
    if (isStarted) {
      audio.play(); // تشغيل الصوت
    } else {
      audio.pause(); // إيقاف الصوت إذا لم يبدأ التمرين
      audio.currentTime = 0; // إعادة تشغيل الصوت من البداية عند بدء التمرين مرة أخرى
    }
    return () => {
      audio.pause(); // التأكد من إيقاف الصوت عند إلغاء المكون
    };
  }, [isStarted, audio]);

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6">{activity}</h2>
      
      <div className="mb-6">
        <div className="p-8">
          {!isStarted ? (
            <div className="space-y-6">
              <Wind className="h-16 w-16 mx-auto text-blue-500" />
              <h3 className="text-xl font-medium">جاهز لبدء تمرين التنفس؟</h3>
              <p className="text-gray-600">
                سنبدأ بتمرين تنفس بسيط لمدة 5 دقائق. اجلس في وضع مريح واتبع الإرشادات.
              </p>
              <button
                onClick={() => setIsStarted(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                ابدأ التمرين
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="relative w-48 h-48 mx-auto">
                <div className={`absolute inset-0 rounded-full border-4 border-blue-500 ${
                  currentPhase === 'inhale' ? 'animate-pulse' : 'animate-none'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center text-xl">
                    {currentPhase === 'inhale' ? 'شهيق' : 'زفير'}
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <Timer className="h-6 w-6 text-gray-500" />
                <span>04:32 متبقي</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BreathingExercise;
