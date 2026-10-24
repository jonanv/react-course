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
                todos: [...state.todos, newTodo]
            };
        }
        case 'TOGGLE_TODO':
            return state;
        case 'DELETE_TODO':
            return state;
    
        default:
            return state;
    }
}
