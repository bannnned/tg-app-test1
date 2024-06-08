import { useEffect } from 'react'
import './App.css'


function App() {
  const tgApp = (window as any).Telegram.WebApp
  //const [count, setCount] = useState(0)

  useEffect(() => {
    tgApp.ready()
  }, [])

  const handleClose = () => {
    tgApp.close()
  }

  return (
    <>
      <div>
        hey
        <button onClick={handleClose}>Закрыть</button>
      </div>

    </>
  )
}

export default App
