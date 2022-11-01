import { AnimatePresence } from 'framer-motion'
import Todo from './components/Todo'

function App (): JSX.Element {
  console.log('render app')
  return (
    <div className="App bg-slate-50 w-screen h-screen grid place-content-center">
      <AnimatePresence>
        <Todo />
      </AnimatePresence>
    </div>
  )
}

export default App
