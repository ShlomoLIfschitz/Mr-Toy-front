import { Switch, Route } from 'react-router-dom'
import routes from './routes.js'

import { AppHeader } from './cmps/app-header.jsx'
import { AppFooter } from './cmps/app-footer.jsx'


export function App() {

  return (
    <div className='main-layout' >
      <AppHeader />
      <main>
        <Switch>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
        </Switch>
      </main>
      <AppFooter />
    </div>
  )

}

