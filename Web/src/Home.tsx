import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import './style/global.css'


export function Home() {
  return (
    <div className="m-0 box-border w-full h-screen flex flex-col items-center justify-between">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
