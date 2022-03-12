import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import FollowTab from '@components/organisms/FollowTab'
import Layout from '@components/templates/Layout/Layout'
import Navigation from '@components/organisms/Navigation'

import HomePage from '@pages/home'
import ResultPage from '@pages/result'
import TagPage from '@pages/tag'

import '../index.css'

/**
 * Render App Component
 * @return {React.ReactNode} App Page.
 */
const App: React.FC = () => {
  return (
    <div className="flex flex-row">
      <Navigation />
      <Layout>
        <Router>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/result" component={ResultPage} />
            <Route path="/tag" component={TagPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </Layout>
      <FollowTab />
    </div>
  )
}

export default App
