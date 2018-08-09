import { Action } from '@ngrx/store';
export const SET_FILTRO = '[FILTER] Set filtro';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export class SetFiltroTodoAction implements Action {
    readonly type = SET_FILTRO;
    constructor(public filtro: filtrosValidos) { }
}


export type Acciones = SetFiltroTodoAction;
