import React, { useEffect, useState } from 'react';

//toastify
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Validate } from './Validate';
import {notify} from './toast';
import './SignUp.css';
//import Styles from './SignUp.css';

const SignUp = () => {

    const [data , setData] = useState({
        name : '',
        email : '',
        password : '',
        confirmPassword : '',
        isAccept: false
    });

    const [errors , setErrors] = useState({});
    const [touched , setTouched] = useState({});

    useEffect(() => {
        setErrors(Validate(data));
    } , [data , touched] )

    const changeHandler = event => {
        if(event.target.name === "isAccept"){
            setData({...data , [event.target.name] : event.target.checked})
        }else {
            setData({...data , [event.target.name] : event.target.value})
        }

        console.log(data);
    }

    const focusHandler = event => {
        setTouched({ ...touched , [event.target.name]:true})
    }

    const submitHandler = event => {
        event.preventDefault(); 
        if (!Object.keys(errors).length) {
            notify("ثبت نام با موفقیت انجام شد" , "success")
        } else {
            notify("ثبت نام انجام نشد" , "error")
            setTouched({
                name : true,
                email : true,
                password : true,
                confirmPassword : true,
                isAccept: true
            })
        }
    }

    return (
        <div className='container'>
            <form onSubmit={submitHandler} className='formContainer'>
                <h2 className='header'>فرم ثبت نام</h2>
                <div className='formField'>
                    <input 
                        placeholder='نام کاربری'
                        className={(errors.name && touched.name) ? 'uncomplited' : 'formInput' }
                        type="text" name="name" 
                        value={data.name} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} />
                    {errors.name && touched.name && <p>{errors.name}</p>}
                </div>
                <div className='formField'>
                    <input 
                        placeholder='ایمیل'
                        className={(errors.email && touched.email) ? 'uncomplited' : 'formInput' }
                        type="email" 
                        name="email" 
                        value={data.email} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} />
                    {errors.email && touched.email && <p>{errors.email}</p>}
                </div>

                <div className='formField'>
                    <input 
                        placeholder='پسورد'
                        className={(errors.password && touched.password) ? 'uncomplited' : 'formInput' }
                        type="password" name="password" 
                        value={data.password} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} />
                    {errors.password && touched.password && <p>{errors.password}</p>}
                </div>

                <div className='formField'>
                    <input
                        placeholder='تایید پسورد' 
                        className={(errors.confirmPassword && touched.confirmPassword) ? 'uncomplited' : 'formInput' }
                        type="password" name="confirmPassword" 
                        value={data.confirmPassword}
                        onChange={changeHandler} 
                        onFocus={focusHandler} />
                    {errors.confirmPassword && touched.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
                
                <div className='formCheack'>
                    <label>قوانین سایت را مطالعه کردم</label>
                    <input 
                        className={(errors.isAccept && touched.isAccept) ? 'formUncheack' : 'formCheack'}
                        type="checkbox" 
                        name="isAccept" 
                        value={data.isAccept} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} />
                    {errors.isAccept && touched.isAccept && <p>{errors.isAccept}</p>}
                </div>
                <div>
                    <a href='#'>ورود</a>
                    <button type='submit' className='btn'>ثبت نام</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;