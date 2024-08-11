import { useTgMethods } from '@/hooks'
import Box from '@mui/material/Box';
import './App.css'


function App() {
  const { user, handleClose, handleToggleButton } = useTgMethods() ?? {}

  const { userName } = user ?? {}

  const messages = [{ id: '1', value: 'Message 1' }, { id: '2', value: 'Message 2' }, { id: '3', value: 'Message 3' }]

  return (
    <Box className='wrapper'>
      <Box className='dialog'>{messages.map(({ id, value }) => {
        return <Box key={id}>{value}</Box>
      })}</Box>
      <Box className='message-field'></Box>

    </Box>
  )
}

//  hey
//         {userName && <div><span className='username'>Привет, {userName}</span></div>}
//         <button onClick={handleClose}>Закрыть</button>
//         <button onClick={handleToggleButton}>Toggle</button>

export default App
