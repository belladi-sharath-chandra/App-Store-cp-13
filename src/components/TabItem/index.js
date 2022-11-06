// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onTabItem = () => {
    setActiveTabId(tabId)
  }

  const tabBtn = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="list">
      <button type="button" onClick={onTabItem} className={tabBtn}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
