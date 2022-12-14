import React , {useState} from 'react'
import { AiOutlinePlusCircle  , AiOutlineMinusCircle} from "react-icons/ai";
import {FiDelete , FiEdit2} from "react-icons/fi";

const Todo = () => {
  const [inpval, setInpval ] = useState("")
  const [todoItem, setTodoItem ] = useState([])
  const [indexNumber, setIndexNumber] = useState("");
  const [updateInput, setupdateInput] = useState("");


  const addTodo = ()=>{
   
    setTodoItem([inpval,...todoItem])
    setInpval("")
  }


const  deleteAll=()=>{
  setTodoItem([])

  }




 const deleteTodo=(ind) =>{
todoItem.splice(ind,1)
setTodoItem([...todoItem])


  }




  const editTodo=(ind)=>{
setupdateInput(todoItem[ind])
  }



  const updateTodo=(ind)=>{
todoItem.splice(ind,1,updateInput)
setTodoItem([...todoItem])
setIndexNumber("");
    setupdateInput("");

  }


  return (
    <React.Fragment>
{/* todo header start*/}


          <div className="container d-flex mt-5 px-4 gap-3 text-center justify-content-center align-items-center">
        <input
          type="text"
          className="form-group form-control text-center mt-3"
          placeholder="ENTER TODO" onChange={(e)=>setInpval(e.target.value)} value={inpval}/>
        <div className="mt-3 d-flex gap-3 justify-content-center align-items-center">
          <button className="btn btn-success" onClick={addTodo}>
          <AiOutlinePlusCircle />
          </button>
          <button className="btn btn-danger" onClick={ deleteAll }>
            <AiOutlineMinusCircle />
          </button>
        </div>
        </div>

        {/* todo header end  */}




        <section className='container text-center mt-5 px-4'>


        {
          todoItem.map((todo,ind)=>{
 return (
<React.Fragment key={ind} >
{indexNumber === ind ?(
  
  <>
<div className="d-flex">

  <input className='add-form form-group form-control text-center mt-3' value={updateInput} 
 onChange={(e)=>{setupdateInput( e.target.value)}}
  autoFocus/> 
  <button className='btn btn-success mx-2 mt-2' onClick={updateTodo}>Update Value</button>
</div>
  </>
  )
   :( <div className="alert alert-success d-flex justify-content-between">
                  {todo}
                  <div className="d-flex gap-2">
                    <FiDelete
                      color="black"
                      className="icon"
                      onClick={() => deleteTodo(ind)}
                      size={25}
                    />
                    <FiEdit2
                      color="black"
                      className="icon"
                      onClick={() => {
                        setIndexNumber(ind);
                        editTodo(ind);
                      }}
                      size={25}
                    />
                  </div>
                </div>)}

</React.Fragment>
           )

        }
        
        
        
        )}
        </section>

    </React.Fragment>
  )
}


export default Todo;
