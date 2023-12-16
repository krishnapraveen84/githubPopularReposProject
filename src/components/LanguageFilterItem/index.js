// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageFiltersData, selectTab, isActiveTabId} = props
  const {id, language} = languageFiltersData
  const onSelectItem = () => {
    selectTab(id)
  }
  const clickClass = isActiveTabId ? 'clicked-item' : null
  return (
    <button
      onClick={onSelectItem}
      type="button"
      className={`item-btn ${clickClass}`}
    >
      <li className="list-item">
        <p className="item-name">{language}</p>
      </li>
    </button>
  )
}
export default LanguageFilterItem
