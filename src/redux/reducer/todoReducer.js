import { store } from "../store";

const initialData = {
  todoList: [
    // {
    //     id:Date.now(),
    //     content:"lorem chht jljjy hfryrs",
    //     completed:false,
    //     date:new Date().toLocaleString()
    // },
  ],
};

export const todoReducer = (state = initialData, action) => {
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todoList: [...state.todoList, action.payload],
    };
  } else if (action.type === "DELETE_TODO") {
    return {
        ...state,
        todoList:action.payload
    };
  } else if(action.type === "EDIT_TODO"){
         return {
            ...state,
            todoList:state.todoList.map((item)=>{
                if(item.id===action.payload.id){
                    return action.payload
                }

                return item;
            })

          }
  }else if(action.type==="TOGGLE_TODO"){
    return {
        ...state,
        todoList: state.todoList.map((item)=> {
            if(item.id===action.payload){
                return {
                    ...item,
                    completed:!item.completed
                }
            }
            return item;
        })
    }
  }
  else {
    return state;
  }
};
