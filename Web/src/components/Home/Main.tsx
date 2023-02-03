import { Home } from "../../Home";
import { NewCostumer } from "../Modal/NewCostumer";
import { Balance } from "../Modal/Balance";
import { Transfer } from "../Modal/Transfer";
import { Deposit } from "../Modal/Deposit";
import { MakePix } from "../Modal/MakePix";
import { Withdraw } from "../Modal/Withdraw";

export function Main(){

   return (
      <main className="w-full h-full flex flex-row justify-between items-center">
        <section className="w-[46%] h-5/6 flex flex-col justify-evenly">
          <NewCostumer/>
          <Transfer/>
          <Balance/>
        </section>
        <section className="w-[46%] h-5/6 flex flex-col justify-evenly">
         <Deposit/>
         <Withdraw/>
         <MakePix/>
        </section>
      </main>
   )
}