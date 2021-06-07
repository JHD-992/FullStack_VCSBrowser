import React from 'react';
import '../styles/users.css';

//create a new component that has state values
class bitBucketUsers extends React.Component {
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


    fetch("/bitBucketUsers")
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

            <h1>{user.display_name}</h1>
            <h6>{user.account_id}</h6>
            <img src={user.links.avatar.href} alt="User Profile picture" width="200"/>
            <br/>
            <a href={user.links.html.href}>Profile Link</a>
            <p><b>Created On:</b> {user.created_on}</p>
            
            <p><b>PS: </b> Somewhere in late 2018 the BitBucket api deprecated being able to search for users based on 
            username and instead implemented a search based on the account's UUID or account id. Due to the nature of 
            obtaining this component, shown here under the display name, I am providing a static call here to a demo account
            I made for the purposes of this task</p>
        </div>
    }
  }
}


export default bitBucketUsers;