import React from 'react'
import Custom_Temp from '../../Components/Custom_Temp'
import CustomITAndSupp from './components/CustomITAndSupp'
const ItAndSupport = () => {
  return (
    <div>
      <Custom_Temp
      mainImage={false}
      color="#fff"
      txtColor="#000" 
      txt1="Elevate Technical Excellence and Seamless"
      txt2="Assistance with Sparkamis"
      sub="Dive into the IT & Support hub within Sparkamis, where technical excellence converges
      with seamless assistance. Empower your team with robust IT solutions and responsive 
      support, ensuring a streamlined and efficient digital environment.
      "
      customAgencies = {CustomITAndSupp} 
      c1Heading="Technical Workflow Optimization"
      c1Sub="Streamline IT processes with Sparkamis's tools designed
      for technical workflow optimization, ensuring efficiency
      and responsiveness."
      c1Vid="/group-chat1.mp4"
      c2Heading="Seamless Ticketing System"
      c2Sub="Enhance support operations with a seamless ticketing system, allowing IT teams to manage and resolve issues with precision."
      c2img="/foster.png"
      c3Heading="Proactive Monitoring Tools"
      c3Sub="Empower IT professionals with proactive monitoring tools, enabling real-time insights into system health and ensuring preemptive issue resolution."
      c4Txt="Analysis"
      c4Heading="Turn teamwork into data"
      c4Sub="Sparkamis's Innovative Platform Converts Teamwork into Actionable Analytics, Unleashing, Informed Decision-Making and Strategic Advancements. "
      c4Img="/analysis.png"
      headingP="Elevate Your Team from Good to Exceptional with Sparkamis"
      />
    </div>
  )
}

export default ItAndSupport
