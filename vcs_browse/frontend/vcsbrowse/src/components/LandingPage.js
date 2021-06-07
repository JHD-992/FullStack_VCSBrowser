import React from 'react'

function LandingPage (props) {

    return <div>
    <link rel="stylesheet" href="/stylesheets/index.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <title>VCS Browser</title>
    <h1>VCS Browser</h1>
    <p>
      Welcome to the VCS browser project. This project will endevour to provide easrch functionality across 3 different VCS systems GitHub, GitLab
      and BitBucket.
    </p>
    <div class="topnav">
      <a class="active" href="/">Home</a>
      <div class="search-container">
        <form action="/gitLabUsers">
          <input type="text" placeholder="Search on GitLab" name="search" />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
      <div class="search-container">
        <form action="/bitBucketUsers">
          <input type="text" placeholder="Search on BitBucket" name="search"/>
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
      <div class="search-container">
        <form action="/gitHubUsers">
          <input type="text" placeholder="Search on GitHub" name="search"/>
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
      </div>
      </div>
    }

export default LandingPage