/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { forwardRef, Ref, useState, memo } from 'react'
import { motion } from 'framer-motion'

import { ModalProps } from '../types'

const Modal = forwardRef(function Modal ({ onClose, addTodoList, controls, onRepeatItem }: ModalProps,
  ref: Ref<HTMLDialogElement>) {
  const [item, setItem] = useState('')
  const [repeatItemError, setRepeatItemError] = useState(false)

  const handleClick: VoidFunction = () => {
    if (item === '') {
      onClose()
      return
    }
    const isInList = onRepeatItem(item)

    if (isInList) {
      setRepeatItemError(true)
      return
    }

    setItem('')
    addTodoList(item)
    onClose()
    setRepeatItemError(false)
  }

  console.log('render modal')
  return (
    <motion.dialog
      animate={controls}
      exit={{ scale: 0, opacity: 0 }}
      ref={ref}
      className='w-2/4 max-w-screen-sm p-10 rounded-lg backdrop:bg-slate-300/50 backdrop:backdrop-blur-sm'>
     <h3 className='text-xl text-center mb-10'>add a new item</h3>
     <input
      type="text"
      onChange={(e) => setItem(e.currentTarget.value)}
      value={item}
      className='border border-slate-200 rounded w-full mx-auto block outline-none p-2'
      />

      {repeatItemError && (
        <div className='mt-10 bg-red-50/70 rounded-md text-red-400 p-2 px-4 text-center w-max mx-auto flex items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 stroke-rose-500 fill-none' viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 9v2m0 4v.01" />
          <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
        </svg>
          <small>Ya tienes esto en tu lista!</small>
        </div>)
        }

     <div className='mt-10 flex gap-6 justify-between w-3/4 mx-auto'>
      <button
        disabled={item.length === 0 }
        onClick={handleClick}
        className='bg-sky-400 font-bold rounded text-white w-64 py-2 hover:bg-sky-500 focus:outline focus:outline-1 focus:outline-sky-700 disabled:bg-zinc-300'>add
      </button>
      <button
        className='border border-sky-400 font-semibold rounded text-slate-900 w-64 py-2 focus:outline focus:outline-1 focus:outline-sky-700 '
        onClick={() => {
          onClose()
          setItem('')
          setRepeatItemError(false)
        }}
        >cancel
      </button>
     </div>
    </motion.dialog>
  )
})

export default memo(Modal)
