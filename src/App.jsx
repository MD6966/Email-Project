import { SnackbarProvider } from 'notistack'
import './App.css'
import Landing from './Components/Landing'
import Router from './routes'
import ErrorBoundary from './Components/ErrorBoundary'
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
      <ErrorBoundary>
      <Router />
      </ErrorBoundary>
    </SnackbarProvider>
    </>
  )
}

export default App
