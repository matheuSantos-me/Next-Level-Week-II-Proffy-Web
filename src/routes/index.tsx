import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from '../Pages/Landing'
import ListTeacher from '../Pages/ListTeacher'
import FormTeacher from '../Pages/FormTeacher'

const Routes = () => {

  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={ListTeacher} />
      <Route path="/give-classes" component={FormTeacher} />
    </BrowserRouter>
  )
}

export default Routes