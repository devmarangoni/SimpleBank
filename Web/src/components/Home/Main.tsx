import { Link } from 'react-router-dom';

export function Main(){

   return (
      <main className="w-full h-full flex flex-row justify-between items-center">
        <section className="w-[46%] h-5/6 flex flex-col justify-evenly">
          <Link to="/teste" className="mt-2 w-full h-36 border-2 border-solid flex items-center justify-center border-black rounded-lg text-4xl bg-zinc-200 hover:bg-zinc-300">New Costumer</Link>
          <button className="mt-2 w-full h-36 border-2 border-solid border-black rounded-lg text-4xl bg-zinc-200 hover:bg-zinc-300">Transfer</button>
          <button className="mt-2 w-full h-36 border-2 border-solid border-black rounded-lg text-4xl bg-zinc-200 hover:bg-zinc-300">Balance</button>
        </section>
        <section className="w-[46%] h-5/6 flex flex-col justify-evenly">
          <button className="mt-2 w-full h-36 border-2 border-solid border-black rounded-lg text-4xl bg-zinc-200 hover:bg-zinc-300">Deposit</button>
          <button className="mt-2 w-full h-36 border-2 border-solid border-black rounded-lg text-4xl bg-zinc-200 hover:bg-zinc-300">Withdraw</button>
          <button className="mt-2 w-full h-36 border-2 border-solid border-black rounded-lg text-4xl bg-zinc-200 hover:bg-zinc-300">Make pix</button>
        </section>
      </main>
   )
}