import {Component} from 'react'

import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'

import RepositoryItem from '../RepositoryItem'

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
  state = {
    isActiveTabId: languageFiltersData[0].id,
    reposItemList: '',
    isProgress: true,
  }

  componentDidMount = () => {
    this.getRepoList()
  }

  getRepoList = async () => {
    const {isActiveTabId} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${isActiveTabId}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    const formattedData = data.popular_repos.map(each => ({
      name: each.name,
      id: each.id,
      avatarUrl: each.avatar_url,
      forksCount: each.forks_count,
      issuesCount: each.issues_count,
      starsCount: each.stars_count,
    }))

    if (response.ok === true) {
      this.setState({reposItemList: formattedData, isProgress: false})
    }
  }

  selectTab = id => {
    this.setState({isActiveTabId: id})
  }

  loader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  listOfItems = () => {
    const {reposItemList} = this.state
    return (
      <ul className="list-item-container">
        {reposItemList.map(each => (
          <RepositoryItem reposItemData={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isActiveTabId, reposItemList, isProgress} = this.state
    console.log(reposItemList)
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
        {isProgress ? this.loader() : this.listOfItems()}
      </div>
    )
  }
}

export default GithubPopularRepos
