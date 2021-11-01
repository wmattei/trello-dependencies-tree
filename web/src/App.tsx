import { useEffect } from "react";
import { pages } from "./pages/pages";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  useEffect(() => {
    window.TrelloPowerUp.initialize({
      'card-buttons': () => {
        return [{
          icon: 'https://cdn.trello.com/1/templates/f0d8b8c4.svg',
          text: 'Add dependency',
          callback: (t: any) => {
            t.popup({
              title: 'Select card',
              url: pages.addDependency.path
            })
          }
        }]
      }
    })
  }, [])
  
  return (
    <BrowserRouter>
      <Switch>
        {Object.values(pages).map(({component, path}) => {
          console.info(path);
          return <Route exact key={path} path={path} component={component} />
        })}
      </Switch>
    </BrowserRouter>
  )
}

export default App;
