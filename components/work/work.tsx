import React, { useState } from 'react'
import FlipMove from 'react-flip-move'
import { WorkDataList } from '../main/work-list-data'
import WorkCard from '../work-card/work-card'

interface Props {
  href: string
  imageAlt: string
  linkUrl: string
  tehnoList: string[]
  workName: string
}
const FunctionalWork = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div ref={ref}>
      <WorkCard {...props} />
    </div>
  )
})

FunctionalWork.displayName = 'FunctionalWork'

const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const list = [
    'All',
    'Custom Software Development',
    'UI/UX Design',
    'Web Design & Development',
  ]

  const handleChooseFilter = (key: string) => () => {
    setActiveFilter(key)
  }
  return (
    <div className="Work">
      <h1>Work</h1>
      <div className="Work__filter-options">
        <ul>
          {list.map((e) => (
            <li
              className={activeFilter === e ? 'selected' : ''}
              onClick={handleChooseFilter(e)}
              key={e}
            >
              {e}
            </li>
          ))}
        </ul>
      </div>
      <div className="Work__card-list">
        <FlipMove>
          {WorkDataList.filter((el) =>
            activeFilter === 'All' ? true : el.tehnoList.includes(activeFilter)
          ).map((work) => (
            <FunctionalWork key={work.workName} {...work} />
          ))}
        </FlipMove>
      </div>
    </div>
  )
}

export default Work
