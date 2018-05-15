import * as React from "react";
import {observer} from "mobx-react";
import {toJS} from "mobx";

@observer
export default class TodoList extends React.Component<any, any> {
    render() {
        const { store } = this.props;
        const todoItems = toJS(store.todoItems);
        return (
            <div>
                <input type="text" placeholder="todo" onChange={e=>store.changeTodo(e.target.value)}/>
                <button onClick={store.addTodo}>add</button>
                <span>{store.count}</span>
                <ul>
                    {todoItems.map((todo:any, index:number)=><li key={index}>{todo}</li>)}
                </ul>
            </div>
        )
    }
}