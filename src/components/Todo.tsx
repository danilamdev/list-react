import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'

import { Todoitem } from '../types'

import Modal from './modal'
import Item from './item'
import LottieAnim from './lottielist'

import { openModal, closeModal } from '../utils'

const INITIAL_STATE = (): Todoitem[] => {
  const fromLS = window.localStorage.getItem('list') ?? ''
  console.log('fromLS', fromLS)
  if (fromLS.length > 0) {
    const todofromLS = JSON.parse(fromLS)
    return todofromLS
  }

  return [] as Todoitem[]
}

export default function Todo (): JSX.Element {
  const [todoItem, setTodoItem] = useState<Todoitem[]>(INITIAL_STATE)
  const modalRef = useRef<HTMLDialogElement>(null)
  const controls = useAnimation()

  const removeItem: (id: Todoitem['id']) => void = (id) => {
    const newList = todoItem.filter(todo => todo.id !== id)

    setTodoItem(newList)
  }

  const handleClick: () => Promise<void> = async () => {
    openModal(modalRef)
    controls.set({ opacity: 0, scale: 0 })
    await controls.start({ opacity: 1, scale: 1, transition: { duration: 0.2, type: 'spring', bounce: 0.4 } })
  }

  const handleRepeatItem = (newItem: Todoitem['text']): Boolean => {
    return todoItem.map(item => item.text.toLowerCase()).includes(newItem.toLowerCase())
  }

  useEffect(() => {
    console.log('effect localstorage', todoItem)
    window.localStorage.setItem('list', JSON.stringify(todoItem))
  }, [todoItem.length])

  console.log('render todo', todoItem)
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.5 }}
        className='w-full min-h-[400px] bg-white rounded-md shadow-back flex flex-col justify-between p-6 relative md:w-[700px]'>
        <LottieAnim />
        <h3
          className="font-bold text-3xl text-center p-8">Supermarket list</h3>
        <div
          className="w-full h-full text-center mb-24">
          <span
            className='block mb-10'>you have <span className='font-bold text-blue-500'>{todoItem.length}</span> items</span>
          <ul
            className="flex flex-col">
            <AnimatePresence initial={false}>
            {
              todoItem.map(todo => (
                <Item key={todo.id} todo={todo} removeItem={removeItem}/>
              ))
            }
            </AnimatePresence>
          </ul>
        </div>

        <button onClick={handleClick} className="bg-sky-400 mb-8 p-3 w-2/4 rounded text-white font-bold m-auto text-lg hover:bg-sky-500 outline-sky-600">add to list
        </button>
      </motion.div>

      <Modal
        ref={modalRef}
        controls={controls}
        onRepeatItem={handleRepeatItem}
        onClose={() => closeModal(modalRef)}
        addTodoList={(todolist: Todoitem['text']) => setTodoItem(prev => [...prev, { text: todolist, id: prev.length + 1 }]) }/>
    </>
  )
}
