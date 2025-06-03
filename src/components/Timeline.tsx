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
            iconStyle={{ background: '#050f0b', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Senior iOS Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">CI&T Software - Campinas, BR</h4>
            <p>
              Collaborated to develop and maintain a large-scale native iOS app for US based client.<br />
              Played a major role in the project enhancement, focusing on performance optimization, scalability and new technology implementation.<br />
              Delivered many app capabilities, including deeplinks, third-party SDKS integration, design system catalog implementation and others, that improved team productivity and code reusability.<br />
              <b>Tech/Arch:</b> Swift, SwiftUI, MVVM-c, Combine, SPM, Rest APIs, Async/Await, Swift Testing.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2024"
            iconStyle={{ background: '#050f0b', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Senior iOS Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">UOL.Compass - Remote, BR</h4>
            <p>
              Played major role in the development a modular and reusable onboarding journey for a large-scale native iOS app for a Brazilian fintech.<br />
              Collaborate with many cross teams to deliver their features by following the best practices and design patterns.<br />
              Collaborate to the implementation of a design system catalog in the app.<br />
              Focused on performance optimization, scalability and new technology implementation.<br />
              <b>Tech/Arch:</b> Swift, ViewCode, MVVM-c, Combine, SPM, Rest APIs, XCTests.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: '#050f0b', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Mid iOS Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Dimensa Tecnologia - Remote, BR</h4>
            <p>
              As a multidisciplinary team member, played a role to develop, maintain and deploy many Banking-as-a-Service native iOS apps.<br />
              <b>Tech/Arch:</b> Swift, ViewCode, MVVM, MVC, RxSwift, SPM, Rest APIs, XCTests.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#050f0b', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Mplan Sistemas - Campinas, BR</h4>
            <p>
              Participated in requirements collecting, research, and design analysis.<br/>
              Collaborated to development, deployment, maintenance of proprietary Health Care platform.<br/>
              <b>Tech/Arch:</b>VueJS, NodeJS, Laravel, PostgreSQL.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - Present"
            iconStyle={{ background: '#050f0b', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">iOS Developer Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote, BR</h4>
            <p>
              Provided consultancy services for many companies, focusing on iOS development best practices, architecture design, and code reviews.<br />
              Assisted in the development of various iOS applications, ensuring high-quality code and adherence to industry standards.<br />
              <b>Tech/Arch:</b> Swift, SwiftUI, MVVM-C, Combine, SPM, Rest APIs, Async/Await, Swift Testing.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2018"
            iconStyle={{ background: '#050f0b', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Guia-se Negocios Pela Internet - Indaiatuba, BR</h4>
            <p>
              Collaborated to development, deployment and maintenance of the proprietary custom platform<br/>
              Maintenance of Multi-Site builder platform CMS and plugins customization.<br/>
              Provided customer support for the deployed products.<br/>
              <b>Tech/Arch:</b>PHP CodeIgniter, NodeJS, Wordpress, MySQL.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;