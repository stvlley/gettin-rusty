import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default  function Layout({ title, children }) {
  return (
    <>
    <Head>
        <title>{title? title + ' | Next Store' : 'Next Store'}</title>
        <meta name='description' content='Created by Stephen Talley'/>
        <link rel="icon" href="favicon.ico" />
    </Head>

    <div className='flex min-h-screen flex-col justify-between'>
        <header>
            <nav className='flex h-12 justify-between shadow-md items-center px-4'>
                <Link href="/" className="text-lg font-bold">Next Store</Link>
                <div>
                    <Link href="/cart" className='p-2'>Cart</Link>
                    <Link href="/login" className='p-2'>Login</Link>
                </div>
            </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>
            {children}
        </main>
        <footer className='flex justify-center items-center h-10 shadow-inner'>
            <p>Copyright © 2022 Next Store</p>
        </footer>
    </div>
    </>
  )
}
