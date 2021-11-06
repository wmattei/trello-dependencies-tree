import { useEffect } from 'react'
import { pages } from './pages/pages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const trelloFunctions = {
  'card-buttons': () => {
    return [
      {
        icon: 'https://cdn.trello.com/1/templates/f0d8b8c4.svg',
        text: 'Add dependency',
        callback: (t: any) => {
          t.popup({
            title: 'This cards depends on...',
            url: pages.addDependency.path,
          })
        },
      },
    ]
  },
}

function App() {
  useEffect(() => {
    window.TrelloPowerUp.initialize(trelloFunctions, {
      appKey: '23e77db94cdf4ac74ac40e63cb8be4ce',
      appName: 'Dependencies Tree',
    })
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        {Object.values(pages).map(({ component, path }) => {
          console.info(path)

          return <Route exact key={path} path={path} component={component} />
        })}
      </Switch>
    </BrowserRouter>
  )
}

export default App
