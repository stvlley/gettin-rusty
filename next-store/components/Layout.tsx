import React, { useContext } from 'react';
import useSWR from 'swr';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import { Store } from '../utils/Store';

type Layout = {
  children: React.ReactNode,
  title: string
}

export default function Layout({ children, title }: Layout) {
  const { state, dispatch } = useContext(Store); 
  const { data, error } = useSWR('/api/navigation', fetch)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  
  return (
    <>
      {/* TODO => swith Head component for dynamic component in _document.tsx */}
      <Head>
        <title>{title ? title + ' | Next Store' : 'Next Store'}</title>
      </Head>

      <div className="flex min-h-screen bg-black/30 flex-col justify-between">
        <Navbar />
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <Footer />
      </div>
    </>
  )
}