import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage'
import GitHubUsers from './components/GitHubUsers'
import GitLabUsers from './components/GitLabUsers'
import BitBucketUsers from './components/BitBucketUsers'

function App() {
  return (

    //create a react page component that reacts to the current url and changes render
    <div className="App">
      <BrowserRouter>
        <Route exact={true} path="/" component={LandingPage} />
        <Route exact={false} path="/gitHubUsers" component={GitHubUsers} />
        <Route exact={false} path="/gitLabUsers" component={GitLabUsers} />
        <Route exact={false} path="/bitBucketUsers" component={BitBucketUsers} />
        
      </BrowserRouter>

    </div>
  );
}

export default App;
