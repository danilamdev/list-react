import { motion } from 'framer-motion'

import DeleteIcon from './deleteIcon'
import { Todoitem } from '../types'

interface ItemProps {
  todo: Todoitem
  removeItem: (todo: Todoitem['id']) => void
}

export default function Item ({ todo, removeItem }: ItemProps): JSX.Element {
  return (
    <motion.li
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      key={todo.id}
      >
      <div className="bg-white text-left w-10/12 mx-auto mb-4 rounded flex items-center p-4 justify-between shadow-sm">
        <span className='w-3/4 text-lg text-slate-700'>{todo.text}</span>
        <button onClick={() => removeItem(todo.id)}>
          <DeleteIcon />
        </button>
      </div>
  </motion.li>
  )
}
