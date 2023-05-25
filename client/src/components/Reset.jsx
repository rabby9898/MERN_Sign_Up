// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from "../styles/Username.module.css"
import {Toaster} from "react-hot-toast";
import {useFormik} from "formik";
import { resetPassword } from '../helper/Validator';


const Reset = () => {

  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pass: ""
    },
    validate: resetPassword,
    onSubmit : async values => {
      console.log(values);
    }
    
  })


  return (
    <div className='container mx-auto'>

      <Toaster position='top-center' reverseOrder={false} duration={1000}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>
          <div className='title flex flex-col items-center'>
            <h4 className=' pb-20 text-3xl font-bold'> Reset Password</h4>
            {/* <span className='py-10 text-sm w-2/3 text-center text-gray5
            '>Reset with new password</span> */}
          </div>

        <form className='py-1' onSubmit={formik.handleSubmit}>

          <div className="textbox flex flex-col items-center gap-6">

            <input {...formik.getFieldProps("password")} className={styles.textbox} type="text" placeholder='Enter new password' />
            <input {...formik.getFieldProps("confirm_pass")} className={styles.textbox} type="text" placeholder='Confirm password' />

            <button className={styles.btn} type="submit">Reset Now</button>
          </div>
        </form> 

       </div>
      </div>
    </div>
  )
}

export default Reset;