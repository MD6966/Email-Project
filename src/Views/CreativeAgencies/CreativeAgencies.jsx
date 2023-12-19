import React from 'react'
import Custom_Temp from '../../Components/Custom_Temp'
import CustomCreativeAgencies from './components/CustomCreativeAgencies'
const CreativeAgencies = () => {
  return (
    <div>
      <Custom_Temp
      mainImage={false}
      color="#fff"
      txtColor="#000" 
      txt1="Fueled by Creativity, Driven by"
      txt2="Seamless Communication."
      sub="At Sparkamis, we understand that creativity is your driving force. Our passion lies in facilitating seamless communication, ensuring your ideas flow effortlessly, and
      collaborative brilliance takes center stage. Experience a platform where creativity thrives, and communication becomes the catalyst for unparalleled innovation.
      "
      img="/marketing.png"
      customAgencies = {CustomCreativeAgencies} 
      c1Txt="Collaborate"
      c1Heading="Harmonize Your Marketing Force"
      c1Sub="Elevate your marketing prowess with Sparkamis's cohesive collaboration platform. Seamlessly unite your marketing team,
      streamline workflows, and amplify creativity, ensuring every campaign resonates with synchronized brilliance. 
      "
      c1Vid="/group-chat1.mp4"
      c2Txt="Editing"
      c2Heading="Foster Momentum, Eliminate Bottlenecks"
      c2Sub="Experience the power of continuous momentum with Sparkamis, where bottlenecks dissolve, and your team surges forward  
      effortlessly. Unlock a dynamic platform that propels seamless collaboration, ensuring uninterrupted progress and unparalleled success."
      c2img="/foster.png"
      c4Txt="Analysis"
      c4Heading="Turn teamwork into data"
      c4Sub="Sparkamis's Innovative Platform Converts Teamwork into Actionable Analytics, Unleashing, Informed Decision-Making and Strategic Advancements. "
      c4Img="/analysis.png"
      headingP="Elevate Your Team from Good to Exceptional with Sparkamis"
      />
    </div>
  )
}

export default CreativeAgencies
