import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { NextApiRequest, NextApiResponse } from 'next';
import User from '@/components/user/user';
import Search from '@/components/search/search';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })
const Home = (props: any) => {

  const [animes, setAnimes]= useState(props.data);
  const [fileredAnimes, setfileredAnimes]= useState(props.data);

  useEffect(()=>{
    setAnimes(props.data)
  },[])

  return <>
    
    <div className='container'>
    <h1 className='text-3xl m-2'>Lista de Animes</h1>
      <Search animes={animes} setfiltered={setfileredAnimes}/>
      <User animes={fileredAnimes} />
    </div>
  </>

}
Home.getInitialProps = async (req: NextApiRequest) => {
  const res = await fetch('https://api.jikan.moe/v4/anime')
  const json = await res.json()
  return { data: json.data }
}
export default Home;