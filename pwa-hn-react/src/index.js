import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import store from './store'
import Default from './components/Default';
import App from './components/News';
import Newest from './components/Newest';
import Show from './components/Show';
import Ask from './components/Ask';
import Jobs from './components/Jobs';
import DetailComment from './components/DetailComment';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const defaultChannelList = [
  'news', 'newest', 'show', 'ask', 'jobs'
];

const changeChannel = (event) => {
  const channelList = document.querySelectorAll('.channel > a');
  if (channelList && channelList.length > 0) {
    for (let i = 0; i < channelList.length; i += 1) {
      channelList[i].setAttribute('style', '');
    }
  }
  event.target.setAttribute('style', 'border-bottom: 4px solid rgb(255, 102, 0)');
};

const initChannel = () => {
  const path = window.location.pathname.match(/\/([a-z]*)\/([0-9]*)/, 'g');
  let channel = 'news';
  if (path) {
    channel = path[1];
  }
  const index = defaultChannelList.indexOf(channel);
  const channelList = document.querySelectorAll('.channel > a');
  index > -1 && channelList[index].setAttribute('style', 'border-bottom: 4px solid rgb(255, 102, 0)');
};

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <div className="topbar">
          <img
            style={{
              width: '20px',
              height: '20px',
            }}
            src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg"
            alt="logo"
          />
          <ul>
            <li className="channel"><Link to="/1" onClick={(event) => changeChannel(event)}>NEWS</Link></li>
            <li className="channel"><Link to="/newest/1" onClick={(event) => changeChannel(event)}>NEW</Link></li>
            <li className="channel"><Link to="/show/1" onClick={(event) => changeChannel(event)}>SHOW</Link></li>
            <li className="channel"><Link to="/ask/1" onClick={(event) => changeChannel(event)}>ASK</Link></li>
            <li className="channel"><Link to="/jobs/1" onClick={(event) => changeChannel(event)}>JOBS</Link></li>
          </ul>
        </div>
        <Route exact path="/" component={Default} />
        <Route exact path="/:page" component={App} />
        <Route exact path="/newest/:page" component={Newest} />
        <Route exact path="/show/:page" component={Show} />
        <Route exact path="/ask/:page" component={Ask} />
        <Route exact path="/jobs/:page" component={Jobs} />
        <Route exact path="/item/:id" component={DetailComment} />
      </div>
      </Router>
  </Provider>
  , document.getElementById('root'));

window.addEventListener('popstate', () => initChannel());

initChannel();
registerServiceWorker();
