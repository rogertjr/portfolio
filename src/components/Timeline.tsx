import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Senior iOS Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">CI&T Software - Campinas, BR</h4>
            <p>
              iOS Native Development.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Senior iOS Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">UOL.Compass - Remote, BR</h4>
            <p>
              iOS Native Development.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Mid iOS Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Dimensa Tecnologia - Remote, BR</h4>
            <p>
              iOS Native Development.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Mplan Sistemas - Campinas, BR</h4>
            <p>
              Web Development, API Development.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">iOS Developer Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote, BR</h4>
            <p>
              iOS Native Development.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Guia-se Negocios Pela Internet - Indaiatuba, BR</h4>
            <p>
              Web Development, API Development.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;