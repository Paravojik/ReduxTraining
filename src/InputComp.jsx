import { useState } from "react"
import { useDispatch } from "react-redux"
import { filterArr } from "./actions"

function InputComp(){
    let dispath=useDispatch()
    let [valInp,setValInp]=useState('')
    function InputCompFunc(e){

        setValInp(e.target.value)
        dispath(filterArr(e.target.value))
    }
//     const variable = 'example';
// const regex = new RegExp(variable, 'g');
//     const text = 'This is an examle sentence. Another exampe word.';
// const matches = text.match(regex);
// console.log(matches); 
    return(
        <input className="InputComp" value={valInp} onChange={InputCompFunc} type="text" />
    )
}
export default InputComp