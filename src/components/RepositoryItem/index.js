// Write your code here
import './index.css'
import {FaStar} from 'react-icons/fa'

const RepositoryItem = props => {
  const {reposItemData} = props
  const {
    id,
    name,
    avatarUrl,
    forksCount,
    issuesCount,
    starsCount,
  } = reposItemData
  return (
    <li className="item-card">
      <img className="item-img" src={avatarUrl} alt={name} />
      <h1 className="name">{name}</h1>
      <div className="icon-name i1">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p className="para">{starsCount} stars</p>
      </div>
      <div className="icon-name">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p className="para">{forksCount} forks</p>
      </div>
      <div className="icon-name">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p className="para">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
