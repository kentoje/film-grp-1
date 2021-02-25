import React from 'react'
import { Route } from 'react-router-native'
import Home from '../pages/Home'
import Movie from '../pages/Movie'

const Routes = () => {
  // Do your things Julian, t'auras ptet besoin d'un state ou de la Context API pour faire ce que tu voulais.
  // useLocation works in there!
  // const location = useLocation()

  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/movie/:id" component={Movie} />
    </>
  )
}

export default Routes
