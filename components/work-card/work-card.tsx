import Link from 'next/link'

interface IWorkCard {
  href: string
  linkUrl: string
  imageAlt: string
  workName: string
  tehnoList: string[]
}

const WorkCard: React.FC<IWorkCard> = (props: IWorkCard) => {
  return (
    <div className="work-card">
      <Link href={props.href}>
        <a>
          <img src={props.linkUrl} alt={props.imageAlt} />
          <div className="work-card__about">
            <p>{props.tehnoList.join(' / ')}</p>
            <p>{props.workName}</p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default WorkCard
