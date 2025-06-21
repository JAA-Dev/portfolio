import React from 'react'

export const Modal = ({open, onClose, children}) => {
  return (
    <div onClick={onClose} className={`fixed inset-0 z-50 flex justify-center
       items-center transition-colors ${open ? "visible bg-black/20 "
         : "invisible"}`}>
          <div onClick={(e) => e.stopPropagation()} className={`bg-[#fcfcfc] dark:bg-[#262626] rounded-2xl p-6 transition-all
             ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
            <button onClick={onClose} className='absolute top-2 right-4 p-1 text-3xl rounded-lg
             text-gray-400 hover:text-gray-500 dark:text-[#f3f3f3] dark:hover:text-[#f3f3f3]/80 cursor-pointer'>&times;</button>
            {children}
          </div>
         </div>
  )
}

export default Modal

