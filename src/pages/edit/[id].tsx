"use client"
import { NextApiRequest, NextApiResponse } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { TaskContex } from '../../context/tasksContext';
import Head from 'next/head';

const Edit = () => {
    const values = useContext(TaskContex)
    const router = useRouter();
    const { id } = router.query;
    return <>
    <Head>
      <title>Convirtiendonos en Dios</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css'></link>
      <link rel="icon" href="/favicon.ico" />
    </Head>
        <div className='container'>
            <h1>{id}</h1>
        </div>
    </>
}
export default Edit;