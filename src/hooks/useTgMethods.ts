import { useEffect } from "react"

export const useTgMethods = () => {
    const tgApp = (window as any).Telegram.WebApp
    //const [count, setCount] = useState(0)
  
    useEffect(() => {
      tgApp.ready()
    }, [])
  
    const handleClose = () => {
      tgApp.close()
    }

    const handleToggleButton = () => {
        if(tgApp.MainButton.isVisile) {
            tgApp.MainButton.hide()
        } else {
            tgApp.MainButton.show()
        }
      }
  
    const user = tgApp.initDataUnsafe?.user

    return {
        tgApp,
        handleClose,
        handleToggleButton,
        user
    }
}