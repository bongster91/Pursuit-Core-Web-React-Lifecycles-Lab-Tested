import { Component } from 'react';
import { toast } from "react-toastify";

class Todo extends Component {
    componentDidMount() {
        toast.success(`New todo added: ${this.props.todo.text}`)
    };

    componentWillUnmount() {

    }

    render() {
        const { todo, remove } = this.props;

        return (
            <>
                <p>{todo.text} </p>
                <button onClick={() => remove(todo.id)}>x</button>
            </>
        );
    };
};

export default Todo;