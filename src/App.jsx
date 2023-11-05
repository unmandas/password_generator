
import {useState,useCallback,useEffect,useRef} from 'react'

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(
    () => {
      let pass = "";
      let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed) str +="0123456789";
      if(charAllowed) str +="!@#$%^&*(){}[]:;?/\|~_-+=`";

      for (let i = 0; i < length; i++) {
        const char = Math.floor(Math.random()*str.length + 1);
        pass += str.charAt(char);
      }
      setPassword(pass);
    },
    [length,numberAllowed,charAllowed,setPassword],
  )
  
  useEffect(() => {
    passwordGenerator();
  }, [length,numberAllowed,charAllowed,passwordGenerator])
  


  return (
    <div className='flex p-10 justify-center'>
      <div className='bg-slate-400 flex flex-wrap justify-center items-center rounded-xl w-2/5 h-40 p-2'>
        <div className='flex justify-center'>
          <input ref={passwordRef} className='p-2 rounded-l-xl w-96' type="text" value={password} readOnly={true} placeholder='password'></input>
          <button onClick={copyToClipboard} className='p-2 rounded-r-xl bg-blue-700 text-white' type='submit'>Copy</button>
        </div>

        <div className='flex gap-5'>
          <div>
            <input value={length} type="range" onChange={(e)=>setLength(e.target.value)} />Length <span className='text-blue-800 position-absolute'>{length}</span>
          </div>  
          <div>
            Number<input type="checkbox" onClick={()=>setNumberAllowed(prev=>!prev)}></input>
          </div>

          <div>
          Character<input type="checkbox" onClick={()=>setCharAllowed(prev=>!prev)}></input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App