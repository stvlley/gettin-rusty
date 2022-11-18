import useSWR from 'swr';
import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';

type Layout = {
    children: React.ReactNode,
}

export default function Layout({ children }: Layout) {
  const { data, error } = useSWR('/api/navigation', fetch)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Navbar  />
      <main>{children}</main>
      <Footer />
    </>
  )
}