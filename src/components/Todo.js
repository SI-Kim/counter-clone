import React, { useState } from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {

    return (
        <li
        style={{
            textDecoration: todo.done ? "line-through" : "none",
            fontFamily: "rounded typeface"
        }}
        onClick={() => onToggle(todo.id)}
        >
            {todo.text}
        </li>
    );
});

const TodoList = React.memo(function TodoList({ todo, onToggle }) {
    return (
        <ul>
            {todo.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    );
});

function Todos({ todo, onCreate, onToggle }) {
    const classes = useStyle();
    const [text, setText] = useState("");
    const onChange = (event) => setText(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        onCreate(text);
        setText("");
    };

    return (
        <div className="todo">
            <Paper className={classes.coverPaper}>
                <form onSubmit={onSubmit}>
                    <TextField
                        className={classes.textForm}
                        labe="To do"
                        variant="filled"
                        value={text}
                        placeholder="할 일을 입력하세요.."
                        onChange={onChange}
                        id="textField"
                    />
                    <Button
                        className={classes.insertBtn}
                        variant="contained"
                        type="submit"
                    >
                            등록
                    </Button>
                </form>
            </Paper>
            {todo.length !== 0 ? (
                <Paper className={classes.todoItemPaper}>
                    <TodoList todo={todo} onToggle={onToggle} />
                </Paper>
            ) : null }
        </div>
    );
}

const useStyle = makeStyles((theme) => ({
    coverPaper: {
        margin: "0 auto",
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: "#F0FFFF",
        marginTop: "5%",
        padding: "3%",
    },
    textForm: {
        width: "50%",
        marginRight: "5%",
        height: "30%",
    },
    insertBtn: {
        width: "10%",
        marginTop: "2%",
    },
    todoItemPaper: {
        margin: "0 auto",
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: "#F0FFFF",
        marginTop: "3%",
        padding: "1%",
        textAlign: "left"
    }
}));

export default Todos;
