import { SnackbarProvider } from 'notistack'
import './App.css'
import Landing from './Components/Landing'
import Router from './routes'
function App() {


  return (
    <>
    <SnackbarProvider
     autoHideDuration={3000}
     anchorOrigin={{
       vertical: 'bottom',
       horizontal: 'right'
     }}
    >
      <Router />
    </SnackbarProvider>
    </>
  )
}

export default App
