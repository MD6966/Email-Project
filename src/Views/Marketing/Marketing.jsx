import React from 'react'
import Custom_Temp from '../../Components/Custom_Temp'
import CustomMarketing from './components/CustomMarketing'

const Marketing = () => {
  return (
    <div>
      <Custom_Temp
      color="#fff"
      txtColor="#000" 
      txt1="The Ultimate Hub for Dynamic Collaboration"
      txt2="and Unmatched Productivity."
      sub="Tailor-made for marketing brilliance, Sparkamis's flexible workspace empowers 
      teams to innovate, strategize, and elevate campaigns with eamless collaboration and unparalleled adaptability."
      img="/marketing.png"
      customMarketing = {CustomMarketing} 
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

export default Marketing
