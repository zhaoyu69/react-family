import * as React from "react";
import TodoList from "../components/TodoList";
import { todoStore } from "../stores/TodoStore";

export default () => {
    return (<TodoList store={todoStore}/>)
}