import '@fontsource/inter/variable.css'
import './index.css'

import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'

import { App, Router } from '@/systems/Core'
import { Home } from '@/pages/Home'

ReactDOM.render(
  <App>
    <Router>
      <Route path="/" element={<Home />} />
    </Router>
  </App>,
  document.getElementById('root')
)
