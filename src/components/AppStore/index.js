import {Component} from 'react'
import './index.css'
import TabItem from '../TabItem'
import AppItem from '../AppItem'

const tabsList = [
  {tabId: 'SOCIAL', displayText: 'Social'},
  {tabId: 'GAMES', displayText: 'Games'},
  {tabId: 'NEWS', displayText: 'News'},
  {tabId: 'FOOD', displayText: 'Food'},
]

const appsList = [
  {
    appId: 0,
    appName: 'Facebook',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png',
    category: 'SOCIAL',
    url: 'https://www.facebook.com/',
  },
  {
    appId: 1,
    appName: 'Messenger',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png',
    category: 'SOCIAL',
    url: 'https://www.messenger.com/',
  },
  {
    appId: 2,
    appName: 'WhatsApp',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png',
    category: 'SOCIAL',
    url: 'https://www.whatsapp.com/',
  },
  {
    appId: 3,
    appName: 'Instagram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png',
    category: 'SOCIAL',
    url: 'https://www.instagram.com/',
  },
  {
    appId: 4,
    appName: 'Snapchat',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png',
    category: 'SOCIAL',
    url:
      'https://accounts.snapchat.com/accounts/login?continue=%2Faccounts%2Fwelcome',
  },
  {
    appId: 5,
    appName: 'Twitter',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png',
    category: 'SOCIAL',
    url: 'https://twitter.com/i/flow/login',
  },
  {
    appId: 6,
    appName: 'Pinterest',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-pinterest.png',
    category: 'SOCIAL',
    url: 'https://https://in.pinterest.com/.com/i/flow/login',
  },
  {
    appId: 7,
    appName: 'WeChat',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-wechat.png',
    category: 'SOCIAL',
    url: 'https://www.wechat.com/',
  },
  {
    appId: 8,
    appName: 'LinkedIn',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-linkedin.png',
    category: 'SOCIAL',
    url: 'https://www.linkedin.com/',
  },
  {
    appId: 9,
    appName: 'Telegram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-telegram.png',
    category: 'SOCIAL',
    url:
      'https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=en_IN&gl=US',
  },
  {
    appId: 10,
    appName: 'Subway Surfers',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-subway-surfers.png',
    category: 'GAMES',
    url:
      'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf&hl=en_IN&gl=US',
  },
  {
    appId: 11,
    appName: 'Crossy Road',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-crossy-road.png',
    category: 'GAMES',
    url:
      'https://play.google.com/store/apps/details?id=com.yodo1.crossyroad&hl=en_IN&gl=US',
  },
  {
    appId: 12,
    appName: 'Super Chef',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-super-chef.png',
    category: 'GAMES',
    url:
      'https://play.google.com/store/apps/details?id=com.ministone.game.risingsuperchef2&hl=en_IN&gl=US',
  },
  {
    appId: 13,
    appName: 'Angry Birds',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-angry-birds.png',
    category: 'GAMES',
    url:
      'https://play.google.com/store/apps/details?id=com.rovio.baba&hl=en_IN&gl=US',
  },
  {
    appId: 14,
    appName: 'Hill Climb 2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-hill-climb-2.png',
    category: 'GAMES',
    url:
      'https://play.google.com/store/apps/details?id=com.fingersoft.hcr2&hl=en_IN&gl=US',
  },
  {
    appId: 15,
    appName: 'Temple Run',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-temple-run.png',
    category: 'GAMES',
    url:
      'https://play.google.com/store/apps/details?id=com.imangi.templerun&hl=en_IN&gl=US',
  },
  {
    appId: 16,
    appName: 'Dr. Driving',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-dr-driving.png',
    category: 'GAMES',
    url:
      'https://play.google.com/store/apps/details?id=com.ansangha.drdriving&hl=en_IN&gl=US',
  },
  {
    appId: 17,
    appName: 'Smurfs Bubble',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-smurfs-bubble.png',
    category: 'GAMES',
    url: 'https://play.google.com/store/games?hl=en_IN&gl=US',
  },
  {
    appId: 18,
    appName: 'Grade Learning',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-grade-learning.png',
    category: 'GAMES',
    url:
      'https://play.google.com/store/search?q=grade%20learning&c=apps&hl=en_IN&gl=US',
  },
  {
    appId: 19,
    appName: 'My Talking Tom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-my-talking-tom.png',
    category: 'GAMES',
    url:
      'https://play.google.com/store/apps/details?id=com.outfit7.mytalkingtomfree&hl=en_IN&gl=US',
  },
  {
    appId: 20,
    appName: 'Inshorts',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-inshorts.png',
    category: 'NEWS',
    url: 'https://www.inshorts.com/en/read',
  },
  {
    appId: 21,
    appName: 'Way2News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png',
    category: 'NEWS',
    url:
      'https://play.google.com/store/apps/details?id=sun.way2sms.hyd.com&hl=te&gl=US',
  },
  {
    appId: 22,
    appName: 'Google News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png',
    category: 'NEWS',
    url: 'https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en',
  },
  {
    appId: 23,
    appName: 'Flipboard',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-flipboard.png',
    category: 'NEWS',
    url: 'https://flipboard.com/',
  },
  {
    appId: 24,
    appName: 'SmartNews',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-smart-news.png',
    category: 'NEWS',
    url: 'https://www.smartnews.com/en/',
  },
  {
    appId: 25,
    appName: 'BBC News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-bbc-news.png',
    category: 'NEWS',
    url: 'https://www.bbc.com/news',
  },
  {
    appId: 26,
    appName: 'CNN News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-cnn-news.png',
    category: 'NEWS',
    url: 'https://edition.cnn.com/',
  },
  {
    appId: 27,
    appName: 'Daily Wire',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-daily-wire.png',
    category: 'NEWS',
    url: 'https://www.dailywire.com/',
  },
  {
    appId: 28,
    appName: 'AP News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-ap-news.png',
    category: 'NEWS',
    url: 'https://apnews.com/',
  },
  {
    appId: 29,
    appName: 'News Break',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-news-break.png',
    category: 'NEWS',
    url: 'https://www.newsbreak.com/',
  },
  {
    appId: 30,
    appName: 'Zomato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-zomato.png',
    category: 'FOOD',
    url: 'https://www.zomato.com/',
  },
  {
    appId: 31,
    appName: 'Swiggy',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-swiggy.png',
    category: 'FOOD',
    url: 'https://www.swiggy.com/',
  },
  {
    appId: 32,
    appName: "Domino's Pizza",
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-dominos.png',
    category: 'FOOD',
    url: 'https://pizzaonline.dominos.co.in/',
  },
  {
    appId: 33,
    appName: 'All in One',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-all-in-one.png',
    category: 'FOOD',
    url:
      'https://play.google.com/store/apps/details?id=com.allfoodapp.foodmania&hl=en_IN&gl=US',
  },
  {
    appId: 34,
    appName: 'Instacart',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-insta-cart.png',
    category: 'FOOD',
    url: 'https://www.instacart.com/',
  },
  {
    appId: 35,
    appName: 'Saucey',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png',
    category: 'FOOD',
    url: 'https://www.instacart.com/',
  },
  {
    appId: 36,
    appName: 'Waitr',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-waitr.png',
    category: 'FOOD',
    url: 'https://www.instacart.com/',
  },
  {
    appId: 37,
    appName: 'Grubhub',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png',
    category: 'FOOD',
    url: 'https://www.instacart.com/',
  },
  {
    appId: 38,
    appName: 'Mercato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png',
    category: 'FOOD',
    url: 'https://www.mercato.com/',
  },
  {
    appId: 39,
    appName: 'DOT',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/food-dot.png',
    category: 'FOOD',
    url: 'https://deliveryontime.me/',
  },
]

// Write your code here
class AppStore extends Component {
  state = {activeTabId: tabsList[0].tabId, searchInput: ''}

  setActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getActiveTabApps = searchedApps => {
    const {activeTabId} = this.state
    const filteredApps = searchedApps.filter(
      each => each.category === activeTabId,
    )
    return filteredApps
  }

  getSearchResults = () => {
    const {searchInput} = this.state
    const searchResults = appsList.filter(each =>
      each.appName.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return searchResults
  }

  render() {
    const {activeTabId, searchInput} = this.state
    const searchResults = this.getSearchResults()
    const filteredApps = this.getActiveTabApps(searchResults)

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">App Store</h1>
          <div className="input-container">
            <input
              type="search"
              className="input"
              placeholder="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
              alt="search icon"
              className="image"
            />
          </div>
          <ul className="tab-container">
            {tabsList.map(eachItem => (
              <TabItem
                tabDetails={eachItem}
                key={eachItem.tabId}
                setActiveTabId={this.setActiveTabId}
                isActive={activeTabId === eachItem.tabId}
              />
            ))}
          </ul>
          <ul className="apps">
            {filteredApps.map(each => (
              <AppItem key={each.appId} appDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default AppStore
