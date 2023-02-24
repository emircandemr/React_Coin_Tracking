import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import createRoutes from './router'
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './store'

const routes = createRoutes()

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router >
      {routes}
    </Router>
</Provider>
)
