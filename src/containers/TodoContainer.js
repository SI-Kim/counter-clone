import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todo';
import { addTodo, toggleTodo } from '../modules/todo';

function TodoContainer() {
    const todo = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const onCreate = (text) => dispatch(addTodo(text));
    const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);
    return (
        <div>
            <Todos todo={todo} onCreate={onCreate} onToggle={onToggle} />
        </div>
    );
}

export default TodoContainer;
