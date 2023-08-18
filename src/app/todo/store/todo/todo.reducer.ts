import { ITodo } from "../../models/todo"
import { TodoActions, todoActionsType } from "./todo.actions"

export const TODO_REDUCER_NODE = 'todo'

export interface ITodoState {
  idIncrement: number
  todoList: ITodo[]
}

const initialState: ITodoState = {
  idIncrement: 1,
  todoList: []
}

export const todoReducer = (state: ITodoState = initialState, action: TodoActions) => {
  switch (action.type) {
    case todoActionsType.create:
      return {
        ...state,
        idIncrement: state.idIncrement + 1,
        todoList: [
          ...state.todoList,
          {
            id: state.idIncrement,
            name: action.payload.name,
            completed: false
          }
        ]
      }

    default:
      return state
  }

  return state
}