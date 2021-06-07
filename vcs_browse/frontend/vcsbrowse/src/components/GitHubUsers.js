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


    fetch("/gitHubUsers?search=" + search + "")
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
            <h1>{user[0].owner.login}</h1>
            <img src={user[0].owner.avatar_url} alt="User Profile picture"/>
            <br/>
            <a id="userGHLink" href={user[0].owner.html_url}>GitHub Link</a>
            {user.map(repo => (
            <tr key={repo.id}>
              <h3>Repo Name: {repo.name}</h3>
              <p>Description: {repo.description}</p>
              <p>Creation Date: {repo.created_at}</p>
              <p>Last Updated: {repo.updated_at}</p>
              <a href={repo.html_url}>Link to Repo</a>
            </tr>
          ))}
          </div>;
    }
  }
}


export default GitHubUsers;