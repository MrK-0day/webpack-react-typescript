import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

const LoadComponent = (component) => Loadable({
  loader: component,
  loading: () => null
})

export class Router extends React.Component {
  public render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact={true} path='/' component={LoadComponent(() => import('./signin/Signin'))} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
