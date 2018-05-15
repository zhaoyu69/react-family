import {computed, observable} from "mobx";

export default class TodoStore{
    @observable todoItems:any[] = [];
    @observable todo:string = "";

    addTodo=()=>{
        this.todoItems.push(this.todo);
    };

    changeTodo=(todo: string)=>{
        this.todo = todo;
    };

    @computed get count(){
        return this.todoItems.length;
    }
}

export const todoStore = new TodoStore();