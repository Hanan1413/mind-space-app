import React, { useState } from "react";
import MindSpace from "./components/MindSpace";
import BirdAnimation from "./components/BirdAnimation";
// import { Button, Container } from "@chakra-ui/react";

const App = () => {
  const [birdAnimation, setBirdAnimation] = useState(true);
  const handleBirdAnimation = () => {
    setBirdAnimation(false); // عندما يتفاعل المستخدم مع الصفحة الأولى
  };

  return (
    <div  className="flex items-center justify-center h-screen">
      <div className="mb-10">
      {birdAnimation && <BirdAnimation birdAnimation={birdAnimation} />}

      </div>
     <div className="mt-15">
     <MindSpace onBirdAnimation={handleBirdAnimation}  />

      </div>      
    </div>
  );
};

export default App;
