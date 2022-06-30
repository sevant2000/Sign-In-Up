import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Sign_img from './Sign_img'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


export const Login = () => {

    const history = useNavigate()

    const [inpval, setInpVal] = useState({

        email: "",
        password: ""
    })

    const [data, setData] = useState([]);

    console.log(inpval)

    const getData = (e) => {
        // console.log(e.target.value)

        const { value, name } = e.target;
        // console.log(value,name)

        setInpVal(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();

        const getUserArr = localStorage.getItem('crudapp');
        console.log(getUserArr);

        const { email, password } = inpval;
        if (email === "") {
            alert('email field is required')
        } else if (!email.includes('@')) {
            alert('please enter valid email address')
        } else if (password === "") {
            alert('password field is required')
        } else if (password.length < 5) {
            alert('password length greater five')
        } else {

            if(getUserArr && getUserArr.length){
                const userdata = JSON.parse(getUserArr);
                const userLogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if(userLogin.length === 0){
                    alert('invalid details')
                } else {
                    console.log('user login successfully');

                    localStorage.setItem("student_login", JSON.stringify(getUserArr))


                    history("/details")
                }
            }
         }

    }



    return (

        <>
            <div className='container mt-3'>
                <section className='d-flex justify-content-between'>
                    <div className='left_data mt-3' style={{ width: "50%" }}>
                        <h3 className='text-center col-lg-6'> SignUp </h3>

                        <Form>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getData} placeholder="Enter Your Email.." />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" className='col-lg-6' onClick={addData} type="submit" style={{ background: "rgb(67, 185, 127)" }}>
                                Submit
                            </Button>

                        </Form>
                        <p className='mt-3'> Create New account  <NavLink to="/"> <span> SignUp </span> </NavLink> </p>
                    </div>
                    <Sign_img />
                </section>
            </div>
        </>

    )
}

export default Login;