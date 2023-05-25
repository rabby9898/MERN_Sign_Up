/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from "../styles/Username.module.css"
import {Toaster} from "react-hot-toast";




const Recovery = () => {




  return (
    <div className='container mx-auto'>

      <Toaster position='top-center' reverseOrder={false} duration={1000}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>
          <div className='title flex flex-col items-center'>
            <h5 className='text-3xl font-bold'> Recover Password</h5>
            <span className='py-10 text-sm w-2/3 text-center text-gray5
            '>Enter 6 digit OTP to recover your password</span>
          </div>

        <form className='py-1'>

          <div className="textbox flex flex-col items-center gap-6">
            <input className={styles.textbox} type="text" placeholder='OTP here' />
            <button className={styles.btn} type="submit">Recover</button>
          </div>

          <div className="text-center py-4">
            <span className='text-gray-500'>Can't get OTP? <button className="text-red-500">Resend</button></span>
          </div>
        </form> 

       </div>
      </div>
    </div>
  )
}

export default Recovery