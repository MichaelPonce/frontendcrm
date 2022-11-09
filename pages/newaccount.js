import React from 'react'
import Layout from '../components/Layout'
import {useFormik} from 'formik';
import * as Yup from 'yup';

const Newaccount = () => {

    // Form validation

    const formik = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required('Name Is Required'),
            apellido: Yup.string().required('Last Name Is Required'), 
            email: Yup.string().email('Invalid Email').required('Email Is Required'), 
            password: Yup.string().required('Password Is Required') .min(6, 'The password needs more than 6 characters') 
        }),
        onSubmit: valores =>{
            console.log('Enviando');
            console.log(valores);
        }
    });

    return (
        <>
        <Layout>
            <h1 className="text-center text-2xl text-white font-light">Create New Account</h1>
            <div className='flex justify-center mt-5'>
                <div className='w-full max-w-sm'>
                    <form className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4'
                    onSubmit={formik.handleSubmit}
                    >
                    <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2 ' htmlFor='nombre'>
                                Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                            id="nombre"
                            type="text"
                            placeholder='Please Enter Your Name'
                            value={formik.values.nombre}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            >
                             
                            </input>
                        </div>

                        {formik.touched.nombre && formik.errors.nombre ? (
                            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">
                                    Error
                                </p>
                                <p>
                                    {formik.errors.nombre}
                                </p>
                            </div>
                        ) : null }

                    <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2 ' htmlFor='apellido'>
                                Last Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                            id="apellido"
                            type="text"
                            placeholder='Please Enter Your Last Name'
                            value={formik.values.apellido}
                            onChange={formik.handleChange}
                            >
                             
                            </input>
                        </div>

                        {formik.touched.apellido && formik.errors.apellido ? (
                            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">
                                    Error
                                </p>
                                <p>
                                    {formik.errors.apellido}
                                </p>
                            </div>
                        ) : null }

                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2 ' htmlFor='email'>
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                            id="email"
                            type="email"
                            placeholder='Please Enter Your Email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            >
                             
                            </input>
                        </div>

                        {formik.touched.email && formik.errors.email ? (
                            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">
                                    Error
                                </p>
                                <p>
                                    {formik.errors.email}
                                </p>
                            </div>
                        ) : null }

                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2 ' htmlFor='password'>
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                            id="password"
                            type="password"
                            placeholder='Please Enter Your Password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            >
                             
                            </input>
                        </div>

                        {formik.touched.password && formik.errors.password ? (
                            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">
                                    Error
                                </p>
                                <p>
                                    {formik.errors.password}
                                </p>
                            </div>
                        ) : null }

                        <input
                        type="submit"
                        className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-700"
                        value="Register Account"
                        ></input>
                    </form>

                </div>
            </div>
        </Layout>
        </>   
    );
}

export default Newaccount;