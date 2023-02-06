import { Link } from 'react-router-dom';

export function Main(){

   return (
      <main className="w-full h-full flex flex-row justify-between items-center">
        <section className="w-[46%] h-5/6 flex flex-col justify-evenly">
          <Link to="/newcostumer" className="mt-2 w-full h-36 border-2 border-solid flex items-center justify-center border-black rounded-lg text-4xl bg-zinc-200 hover:bg-zinc-300">New Costumer</Link>
          <Link to="/transfer" className="flex items-center justify-center mt-2 w-full h-36 border-2 border-solid border-black rounded-lg text-4xl bg-zinc-200 hover:bg-zinc-300">Transfer</Link>
          <Link to="/balance" className="flex items-center justify-center mt-2 w-full h-36 border-2 border-solid border-black rounded-lg text-4xl bg-zinc-200 hover:bg-zinc-300">Balance</Link>
        </section>
        <section className="w-[46%] h-5/6 flex flex-col justify-evenly">
          <Link to="/deposit" className="flex items-center justify-center mt-2 w-full h-36 border-2 border-solid border-black rounded-lg text-4xl bg-zinc-200 hover:bg-zinc-300">Deposit</Link>
          <Link to="/withdraw" className="flex items-center justify-center mt-2 w-full h-36 border-2 border-solid border-black rounded-lg text-4xl bg-zinc-200 hover:bg-zinc-300">Withdraw</Link>
          <Link to="makepix" className="flex items-center justify-center mt-2 w-full h-36 border-2 border-solid border-black rounded-lg text-4xl bg-zinc-200 hover:bg-zinc-300">Make pix</Link>
        </section>
      </main>
   )
}