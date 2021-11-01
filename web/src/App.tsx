import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.TrelloPowerUp.initialize({
      'card-buttons': () => {
        return [{
          icon: 'https://cdn.trello.com/1/templates/f0d8b8c4.svg',
          text: 'Dependencies',
        }]
      }
    })
  }, [])
  return (
    <h1>Hello world</h1>
  );
}

export default App;
