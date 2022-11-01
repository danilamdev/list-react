import { AnimationControls } from 'framer-motion'

export interface Todoitem {
  id: number
  text: string
}

export interface ModalProps {
  onClose: () => void
  addTodoList: (todolist: Todoitem['text']) => void
  controls: AnimationControls
  onRepeatItem: (item: Todoitem['text']) => Boolean
}
