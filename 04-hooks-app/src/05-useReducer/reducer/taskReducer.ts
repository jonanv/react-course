import * as z from "zod/v4";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    todos: Todo[],
    lenght: number,
    completed: number,
    pending: number
}

export type TaskAction =
    | { type: 'ADD_TODO', payload: string }
    | { type: 'TOGGLE_TODO', payload: number }
    | { type: 'DELETE_TODO', payload: number };

const TodoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean(),
});

const TaskStateSchema = z.object({
    todos: z.array(TodoSchema),
    lenght: z.number(),
    completed: z.number(),
    pending: z.number(),
});

export const getInitialState = () => {
    const localStorageState = localStorage.getItem('task-state');
    
    if (!localStorageState) {
        return {
            todos: [],
            lenght: 0,
            completed: 0,
            pending: 0
        }
    }

    // Validar mediante Zod
    const result = TaskStateSchema.safeParse(JSON.parse(localStorageState));

    if (result.error) {
        console.log(result.error);
        return {
            todos: [],
            lenght: 0,
            completed: 0,
            pending: 0
        }
    }

    //! Cuidado, porque el objeto pudo haber sido manipulado
    return result.data;
}

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload.trim(),
                completed: false
            };

            // ! No se debe de hacer
            // state.todos.push(newTodo);

            return {
                ...state,
                todos: [...state.todos, newTodo],
                lenght: state.todos.length + 1,
                pending: state.pending + 1,
            };
        }

        case 'TOGGLE_TODO': {
            const updatedTodos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            });

            return {
                ...state,
                todos: updatedTodos,
                lenght: updatedTodos.length,
                completed: updatedTodos.filter((todo) => todo.completed).length,
                pending: updatedTodos.filter((todo) => !todo.completed).length,
            };
        }

        case 'DELETE_TODO': {
            const currentTodos = state.todos.filter((todo) => todo.id !== action.payload);

            return {
                ...state,
                todos: currentTodos,
                lenght: currentTodos.length,
                completed: currentTodos.filter((todo) => todo.completed).length,
                pending: currentTodos.filter((todo) => !todo.completed).length,
            }
        }
    
        default:
            return state;
    }
}
