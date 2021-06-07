import React from 'react';
import '../styles/users.css';

//create a new component that has state values
class GitHubUsers extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      user: ""
    };
  }

  //use a componenet to fetch the api values once the component is mounted
  componentDidMount () {
    console.log(window.location.search)
    const urlParam = new URLSearchParams(window.location.search);
    const search = urlParam.get('search')
    console.log(search);


    fetch("/gitLabUsers?search=" + search + "")
    //convert result values to plain text
    .then(res => res.json())
      .then(
        (result) => {
          //set state to be loaded with the user loaded from the JSON via api
          this.setState ({
            isLoaded: true,
            user: result
          }); },
        //if error is encountered, output error
        (error) => {
          this.setState ({
            isLoaded: true,
            error
          });
        }
      )
  }

  render () {
    //set the state based on current values
    const { error, isLoaded, user } = this.state;
    //if the error becomes set, displpay the error message
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    //if isLoaded is not set to true, shows default loading user
    else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    /*if everything is set and user is loaded, render the github related information of the searched user*/
    else { 
        return <div>
            <h1>{user[0].name}</h1>
            <p><b>Username:</b> {user[0].username}</p>
            <img src={user[0].avatar_url} alt="User profile picture" width="200" />
            <br/>
            <a href={user[0].web_url}>Link to Profile</a>
        </div>
    }
  }
}


export default GitHubUsers;