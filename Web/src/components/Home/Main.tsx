import { Link } from 'react-router-dom';

export function Main(){

   return (
      <main className="w-full h-full flex flex-row justify-between items-center font-extrabold">
        <section className="w-[46%] h-5/6 flex flex-col justify-evenly">
          <Link to="/newcostumer" className="mt-2 w-full h-36 border-2 border-solid flex items-center justify-center border-zinc-300 rounded-lg text-4xl bg-cyan-600 hover:bg-cyan-500">New Costumer</Link>
          <Link to="/transfer" className="flex items-center justify-center mt-2 w-full h-36 border-2 border-solid border-zinc-300 rounded-lg text-4xl bg-cyan-600 hover:bg-cyan-500">Transfer</Link>
          <Link to="/balance" className="flex items-center justify-center mt-2 w-full h-36 border-2 border-solid border-zinc-300 rounded-lg text-4xl bg-cyan-600 hover:bg-cyan-500">Balance</Link>
        </section>
        <section className="w-[46%] h-5/6 flex flex-col justify-evenly">
          <Link to="/deposit" className="flex items-center justify-center mt-2 w-full h-36 border-2 border-solid border-zinc-300 rounded-lg text-4xl bg-cyan-600 hover:bg-cyan-500">Deposit</Link>
          <Link to="/withdraw" className="flex items-center justify-center mt-2 w-full h-36 border-2 border-solid border-zinc-300 rounded-lg text-4xl bg-cyan-600 hover:bg-cyan-500">Withdraw</Link>
          <Link to="makepix" className="flex items-center justify-center mt-2 w-full h-36 border-2 border-solid border-zinc-300 rounded-lg text-4xl bg-cyan-600 hover:bg-cyan-500">Make pix</Link>
        </section>
      </main>
   )
}