import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/app'

const renderApp = (component: typeof App) =>
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.querySelector('#root')
  )

renderApp(App)

if ((module as any).hot) {
  (module as any).hot.accept('./components/app', () => renderApp(App))
}
