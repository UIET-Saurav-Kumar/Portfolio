import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import CollegeIcon from '@mui/icons-material/School';


function Experiences() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement className='vertical-timeline-element--education'
      date='2019 - 2023'
      iconStyle={{background:"#3e497a" , color:"#fff"}}
      icon={<CollegeIcon/>}
      >
        <h3 className='vertical-timeline-element-title'>University Institue of Engineering and Technology, Panjab University, Chandigarh </h3>
        <h4>Electronic and Communication Engineering</h4>
        <p>College</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement className='vertical-timeline-element--education'
      date='2016 - 2018'
      iconStyle={{background:"#3e497a" , color:"#fff"}}
      icon={<SchoolIcon/>}
      >
        <h3 className='vertical-timeline-element-title'>Raja Ram Sha College, Raxaul</h3>
        <p>High School</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement className='vertical-timeline-element--education'
      date='2015 - 2016'
      iconStyle={{background:"#3e497a" , color:"#fff"}}
      icon={<SchoolIcon/>}
      >
        <h3 className='vertical-timeline-element-title'>Shantiniketan Jubilee School, Motihari</h3>
        <p>Secondary School</p>
      </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experiences
