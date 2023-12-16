import {Component} from 'react'

import LanguageFilterItem from '../LanguageFilterItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {isActiveTabId: languageFiltersData[0].id}

  selectTab = id => {
    this.setState({isActiveTabId: id})
  }

  render() {
    const {isActiveTabId} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Popular</h1>
        <ul className="filter-items-container">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              isActiveTabId={isActiveTabId === each.id}
              selectTab={this.selectTab}
              languageFiltersData={each}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GithubPopularRepos
