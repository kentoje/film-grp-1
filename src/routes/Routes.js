import React from 'react'
import { Route } from 'react-router-native'
import Home from '../pages/Home'
import Movie from '../pages/Movie'

const Routes = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route path="/movie/:id" component={Movie} />
  </>
)

export default Routes
