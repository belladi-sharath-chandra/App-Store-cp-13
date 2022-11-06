// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl, appId, url} = appDetails

  return (
    <li className="app-item" id={appId}>
      <a href={url}>
        <img src={imageUrl} className="app-image" alt={appName} />
      </a>
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
