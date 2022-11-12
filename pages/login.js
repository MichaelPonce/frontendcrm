import React, {useState} from 'react'
import Layout from '../components/Layout'
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { gql, useMutation } from '@apollo/client';
import Router, { useRouter } from 'next/router';


const AUTENTICAR_USUARIO = gql`
    mutation autenticarUsuario ($input: AutenticarInput) {
        autenticarUsuario (input: $input){
            token
        }
    }
`;

const Login = () => {

    //Routing
    const router = useRouter();

    //Alert when password or email is invalid

    const [mensaje, guardarMensaje] = useState(null);

    // Mutation for login new users

    const [autenticarUsuario] = useMutation(AUTENTICAR_USUARIO);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                        .email('The Email Is Invalid')
                        .required('The Email Is Required'),
            password: Yup.string()
                    .required('The Password Is Required')
        }),
        onSubmit: async valores =>{

            console.log(valores);
            
                const {email, password} =valores;

            try {
                const {data} = await autenticarUsuario ({
                    variables: {
                        input:{
                            email,
                            password
                        }
                    }
                });
                console.log(data);
                guardarMensaje ('Verifying...');

                //Save Token In LocalStorage
                const {token} =  data.autenticarUsuario;
                localStorage.setItem('token', token);

                //Redirect to Client

                setTimeout(() => {
                    Router.push('/');
                }, 3000);

            } catch (error) {
                guardarMensaje(error.message.replace('GraphQL error ', ''));

                setTimeout(() => {
                    guardarMensaje(null)
                }, 2000 );
                //console.log(error);
            }
        }
    })

    //Const with an alert
    const mostrarMensaje =() => {
        return(
            <div className='bg-white text-slate-800 py-2 px-3 w-full my-3 max-w-sm text-center mx-auto'>
                <p>{mensaje}</p>
            </div>
        )
    }

    return (
        <>
        <Layout>
            <h1 className="text-center text-2xl text-white font-light">Login</h1>

            {mensaje && mostrarMensaje() }
            <div className='flex justify-center mt-5'>
                <div className='w-full max-w-sm'>
                    <form className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4'
                          onSubmit={formik.handleSubmit}
                    >
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2 ' htmlFor='email'>
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                            id="email"
                            type="email"
                            placeholder='Please Enter Your Email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
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
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
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
                        value="Sign In"
                        ></input>
                    </form>

                </div>
            </div>
        </Layout>
        </>   
    );
}

export default Login;