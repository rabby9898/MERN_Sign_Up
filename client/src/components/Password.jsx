// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Link} from "react-router-dom"
import avatar from "../assets/profile.png"
import styles from "../styles/Username.module.css"
import {Toaster} from "react-hot-toast";
import {useFormik} from "formik";
import { passwordValidate } from '../helper/Validator';


const Password = () => {

  const formik = useFormik({
    initialValues: {
      password: ""
    },
    validate: passwordValidate,

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
            <h4 className='text-5xl font-bold'> Hello Brother</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray5
            '>Explore More By Connecting with Us</span>
          </div>

        <form className='py-1' onSubmit={formik.handleSubmit}>
          <div className="profile flex justify-center py-4">
            <img src={avatar} className={styles.profile_img} alt="avatar" />
          </div>

          <div className="textbox flex flex-col items-center gap-6">
            <input {...formik.getFieldProps("password")} className={styles.textbox} type="text" placeholder='Password' />
            <button className={styles.btn} type="submit">Sign In</button>
          </div>

          <div className="text-center py-4">
            <span className='text-gray-500'>Forgot password? <Link className="text-red-500" to="/recovery">Reset password</Link></span>
          </div>
        </form> 

       </div>
      </div>
    </div>
  )
}

export default Password;