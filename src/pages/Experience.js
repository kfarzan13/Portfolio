import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'

function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                className='vertical-timeline-element--education'
                date='2014 - 2016'
                iconStyle={{ background: '#3e497a' , color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className='vertical-timeline-element-title'>
                    Shivalik Cambridge College, Agra, Uttar Pradesh
                </h3>
                <p> High School Diploma </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                className='vertical-timeline-element--education'
                date='2016 - 2018'
                iconStyle={{ background: '#3e497a' , color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className='vertical-timeline-element-title'>
                    Shivalik Cambridge College, Agra, Uttar Pradesh
                </h3>
                <p> Senior Secondary Diploma </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                className='vertical-timeline-element--education'
                date='2018 - 2022'
                iconStyle={{ background: '#3e497a' , color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className='vertical-timeline-element-title'>
                    Uttam Institute of Technology and Management, Agra, Uttar Pradesh
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                    Bachelor of Computer Application
                </h4>
                <p> Computer Science </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date='2022 - present'
                iconStyle={{ background: '#e9d35b' , color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className='vertical-timeline-element-title'>
                    Backend Developer Trainee
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                    Function Up, Bangalore, Karnataka
                </h4>
                <p> Trained in Backend development in this Bootcamp </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience