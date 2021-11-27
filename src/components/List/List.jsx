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
        const newTasks = {
            id: nanoid(),
            date: new Date().toLocaleString(),
            text,
            isCompleted: false,
        };

        setTasks(prev => [...prev, newTasks]);
    };

    const removeTodo = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const todoCompleted = (id) => {
        const arr = [...tasks];
        const todoindex = arr.findIndex((task) => task.id === id);
        arr[todoindex].isCompleted = !arr[todoindex].isCompleted;
        setTasks(arr);
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
                        Удалить всё
                    </RemoveTasksButton>
                ) : (
                    <div></div>
                )}
            </RemoveTasksBlock>
        </ListWrapper>
    );
};
