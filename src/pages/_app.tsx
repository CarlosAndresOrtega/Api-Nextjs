import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { TaskProvier } from '../context/tasksContext'

export default function App({ Component, pageProps }: AppProps) {
  return <TaskProvier><Component {...pageProps} /></TaskProvier> 
}
