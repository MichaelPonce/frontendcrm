import React, { Children } from 'react';
import Head from 'next/head';
import Sidebar from './Sidebar';
import {useRouter} from 'next/router';
import Login from '../pages/login';



const Layout =({children}) => {

    // ROUTING HOOK
    const router = useRouter();

    return ( 
        <>
            <Head>
                <title>CRM- Client Administration</title>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css.map'/>
            
            </Head>

            {router.pathname === '/login' || router.pathname === '/newaccount' ? (
                <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
                    <div>
                    {children}
                    </div>
                </div> 
            ):(
                <div className='bg-gray-200 min-h-screen'>
                <div className='flex min-h-screen'>
                <Sidebar />
                    <main className='sm:w-2/3 xl:w-4/5 sm: min-h-screen p-5 '>
                 

                    {children}
                    </main>
                </div>
            </div>
            )
            }
        </>

    );
}

export default Layout;