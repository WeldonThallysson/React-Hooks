
import React,{useState,useEffect,useMemo,useCallback} from 'react'

export default function App() {
    const [tarefas,setTarefas] = useState(['pagar a conta de luz','Estudar React Hooks'])
    const [input,setInput] = useState('')
    const totalTarefas = useMemo(() => tarefas.length,[tarefas])
    useEffect(() => {
        const tarefaStorage = localStorage.getItem('tarefas')

        setTarefas(JSON.parse(tarefaStorage))

    },[])
    useEffect(() => {
        localStorage.setItem('tarefas',JSON.stringify(tarefas))        
    },[tarefas])
    const add = useCallback(() => {
        setTarefas([...tarefas, input])
    },[tarefas,input])
  return (
    <div>
   <ul>
    {tarefas.map((item) => (
        <li>{item}</li>
    ))}
   </ul>
   <br/>
   <strong>voce tem {totalTarefas} tarefas</strong>
   <input type='text' value={input} onChange={(text) => setInput(text.target.value)}></input>
   <button onClick={() => add()}> adicionar</button>
   </div>
  )
}