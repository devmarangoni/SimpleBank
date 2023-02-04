interface FormPieceProps{
   labelName:String;
   placeHolder:String;
   type?:String
}

export function FormPiece({ labelName, placeHolder, type }:FormPieceProps){
   return (
      <div className="w-full px-3 mb-6 md:mb-0 mt-2">
         <label 
            className="text-xl block uppercase tracking-wide text-gray-700font-bold mb-2" 
            htmlFor={labelName.toString()}
         >
            { labelName.toUpperCase() }
         </label>
         <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            type={type != undefined ? type.toString() : "text"}
            id={labelName.toString()} 
            placeholder={placeHolder.toString()}
         />
      </div>
   )
}