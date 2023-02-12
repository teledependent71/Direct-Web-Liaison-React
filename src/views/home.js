import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Web Liaison</title>
        <meta property="og:title" content="Direct Web Liaison" />
      </Helmet>
    </div>
  )
}

export default Home
