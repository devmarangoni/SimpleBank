import { Header } from './components/Home/Header';
import { Main } from './components/Home/Main';
import { Footer } from './components/Home/Footer';
import './style/global.css'

interface HomeProps{
  value?:boolean;
}

export function Home({ value }:HomeProps) {
  return (
    <div className="box-border w-full h-screen flex flex-col items-center justify-between" id='home'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
