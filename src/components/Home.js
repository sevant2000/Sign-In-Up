import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Sign_img from './Sign_img'
import {NavLink} from 'react-router-dom'

function Home() {

    const [inpval, setInpVal] = useState({
        name: "",
        email: "",
        date: "",
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

        const { name, email, date, password } = inpval;
        if (name === "") {
            alert('name field is required')
        } else if (email === "") {
            alert('email field is required')
        } else if (!email.includes('@')) {
            alert('please enter valid email address')
        } else if (date === "") {
            alert('date field is required')
        } else if (password === "") {
            alert('password field is required')
        } else if (password.length < 5) {
            alert('password length greater five')
        } else {
            console.log('data added successfully')

            localStorage.setItem('crudapp', JSON.stringify([...data,inpval]))
        }

    }


    return (
        <>
            <div className='container mt-3'>
                <section className='d-flex justify-content-between'>
                    <div className='left_data mt-3' style={{ width: "50%" }}>
                        <h3 className='text-center col-lg-6'> Sign Up </h3>

                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getData} placeholder="Enter Your Name.." />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getData} placeholder="Enter Your Email.." />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="date" name='date' onChange={getData} />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" className='col-lg-6' onClick={addData} type="submit" style={{ background: "rgb(67, 185, 127)" }}>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'> Already Have an account? <NavLink to="/login"><span> SignIn </span> </NavLink> </p>
                    </div>
                    <Sign_img />
                </section>
            </div>
        </>
    )
}

export default Home