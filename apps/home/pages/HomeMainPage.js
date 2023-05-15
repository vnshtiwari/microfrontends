import React from 'react'

import InsuranceForLife from '../components/InsuranceForLife'
import YourGoal from '../components/yourGoal'
import WhatsHot from '../components/whatsHot'
import PersonalizedInsight from '../components/personalizedInsight'
import OurPurpose from '../components/OurPurpose'

export default function HomeMainPage() {
  return (
    <div className="home">
      <OurPurpose />
      <YourGoal />
      {/* <Testimonial/> */}
      <div style={{ height: 50 }}></div>
      <InsuranceForLife />
      <WhatsHot />
      <PersonalizedInsight />
    </div>
  )
}
