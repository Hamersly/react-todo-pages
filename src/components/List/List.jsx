import React, { useState } from "react";
import { nanoid } from "nanoid";
import {
    ListWrapper,
    TasksList,
    RemoveTasksButton,
    RemoveTasksBlock,
} from "./List.styles";
import { Input } from "../Input/Input";
import { Task } from "../Task/Task";

export const List = () => {
    const [tasks, setTasks] = useState([]);

    const addTodo = (text) => {
        const newTodo = {
            id: nanoid(),
            date: new Date().toLocaleString(),
            text,
            isCompleted: false,
        };

        const arr = [...tasks, newTodo];
        const newTasks = sortTodo(arr);

        setTasks(newTasks);
    };

    const removeTodo = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const sortTodo = (arr, id) => {
        if (id) {
            const todoindex = arr.findIndex((task) => task.id === id);
            arr[todoindex].isCompleted = !arr[todoindex].isCompleted;
        }
        return arr.sort((a, b) => a.isCompleted - b.isCompleted);
    };

    const todoCompleted = (id) => {
        const arr = [...tasks];
        const newTasks = sortTodo(arr, id);
        setTasks(newTasks);
    };

    return (
        <ListWrapper>
            <Input addTodo={addTodo} />
            <TasksList>
                {tasks.map((item) => (
                    <Task
                        removeTodo={removeTodo}
                        task={item}
                        todoCompleted={todoCompleted}
                        key={item.id}
                    />
                ))}
            </TasksList>
            <RemoveTasksBlock>
                {tasks.length > 1 ? (
                    <RemoveTasksButton onClick={() => setTasks([])}>
                        Удалить все задания
                    </RemoveTasksButton>
                ) : (
                    <div></div>
                )}
            </RemoveTasksBlock>
        </ListWrapper>
    );
};
