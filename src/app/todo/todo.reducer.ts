import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('comer');
const todo2 = new Todo('almorzar');
todo1.completado = true;

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {
    switch (action.type) {
        case fromTodo.AGREGAR_TODO:
            return [...state, new Todo(action.payload)];

        case fromTodo.TOGGLE_TODO:
            return state.map(todoEdit => {

                if (todoEdit.id === action.payload) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };
                } else {
                    return todoEdit;
                }

            });

        case fromTodo.TOGGLE_ALL_TODO:
            return state.map(todoEdit => {
                return {
                    ...todoEdit,
                    completado: action.completado
                };
            });


        case fromTodo.EDITAR_TODO:
            return state.map(todoEdit => {

                if (todoEdit.id === action.payload) {
                    return {
                        ...todoEdit,
                        texto: action.texto
                    };
                } else {
                    return todoEdit;
                }

            });

        case fromTodo.BORRAR_TODO:
            return state.filter(todoEdit => todoEdit.id !== action.payload);

        case fromTodo.LIMPIAR_TODO:
            return state.filter(todoEdit => !todoEdit.completado);
        default:
            return state;
    }
}
