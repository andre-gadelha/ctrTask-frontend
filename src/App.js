
import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {
  
  //Declarando o Objeto Task em formato JSON
  const task = {
    name: '',
    prioridade: ''
  }

  //UserStates
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [objTask, setObjTask] = useState(task);

  //UseEffect
  useEffect(()=>{
    fetch("http://localhost:8080/tasks")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setTasks(retorno_convertido))
  }, []);

  //Obter dados do formulário
  const digitar = (e) =>{
    setObjTask({...objTask, [e.target.name]:e.target.value})
  }

  //Cadastrar Task
  const cadastrar = () =>{
    fetch("http://localhost:8080/tasks/registerTask", {
      method:'post',
      body:JSON.stringify(objTask),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      
      //Tratamento da resposta conforme a mensagem de retorno
      //if (retorno_convertido.mensagem == ""){
      //  console.log(retorno_convertido);
      //}else{
        console.log(retorno_convertido);
        //alert("Registrado com sucesso!");
        resetFormularioTask();
      //}
    })
  }

  //Resetar formulário
  const resetFormularioTask = () =>{
    setObjTask(task);
  }
  
  //Retorno
  return (
    <div>
      <p>
        {
        //JSON.stringify(tasks)
        JSON.stringify(objTask)
        }
        </p>
      <Formulario botao={btnCadastrar} eventoDigitar={digitar} cadastrar={cadastrar} obj={objTask}/>
      <Tabela arrTasks={tasks}/>
    </div>
  );
}

export default App;
