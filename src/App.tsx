import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const tgApp = (window as any).Telegram.WebApp
  const [count, setCount] = useState(0)

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
        <button>Закрыть</button>
      </div>

    </>
  )
}

export default App
