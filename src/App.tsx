import { useTgMethods } from '@/hooks'
import './App.css'


function App() {
    const {user, handleClose, handleToggleButton} = useTgMethods()

    const { userName } = user ?? {}

  return (
    <>
      <div className='wrapper'>
        hey
        {userName && <div><span className='username'>Привет, {userName}</span></div>}
        <button onClick={handleClose}>Закрыть</button>
        <button onClick={handleToggleButton}>Toggle</button>
      </div>

    </>
  )
}

export default App
