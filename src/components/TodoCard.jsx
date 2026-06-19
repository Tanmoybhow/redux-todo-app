import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/action/todoAction";
const TodoCard = ({setFormInput,setIsEdit,setIsPopUp,id,content,date,completed}) => {
  const todoList = useSelector(state=> state.todoList);
  const dispatch = useDispatch();

  const handleDelete = (id)=>{
    const newTodoList = todoList.filter((item) =>{
      if(item.id!=id){
        return item;
      }
    })
      dispatch(deleteTodo(newTodoList));
    
  }

  const handleEdit = (id)=>{
    setIsPopUp(true);
    setIsEdit(true);
    const editData = todoList.find((item)=> item.id===id);
    console.log(editData);
    setFormInput(editData)
  }

  const handleToggle = (id)=>{
    dispatch(toggleTodo(id));
    console.log("handleToggle click hchhe")
  }
  return (
    <div className="bg-white w-full flex justify-between items-center px-2 py-1 shadow rounded">
      <div className="flex items-center gap-3" >
        <input
          type="checkbox"
          className="w-5 h-5 accent-emerald-500"
          id={`check_${id}`}
          checked={completed}
          onChange={()=> handleToggle(id)}
        />
        <label htmlFor={`check_${id}`}>
          <p>{content}</p>
          <p className="text-[14px] text-slate-700">{date}</p>
        </label>
      </div>

      <div className="flex gap-3 items-center">
        <div className="bg-slate-300 w-7 h-7 rounded flex items-center justify-center cursor-pointer hover:text-red-800 transition-all duration-75" onClick={()=> handleDelete(id)}>
          <RiDeleteBin6Fill />
        </div>
        <div className="bg-slate-300 w-7 h-7 rounded flex items-center justify-center" onClick={()=>handleEdit(id)}>
          <MdModeEdit />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
