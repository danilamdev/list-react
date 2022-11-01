import React from 'react'

export default function ItemError (): JSX.Element {
  return (
    <div className='mt-10 bg-red-50/70 rounded-md text-red-400 p-2 px-4 text-center w-max mx-auto flex items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 stroke-rose-500 fill-none' viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 9v2m0 4v.01" />
          <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
        </svg>
          <small>Ya tienes esto en tu lista!</small>
        </div>
  )
}
