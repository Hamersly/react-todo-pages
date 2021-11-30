import React, { useState, useEffect } from "react";
import {
    ListWrapper,
    TasksList,
    RemoveTasksButton,
    RemoveTasksBlock,
} from "./List.styles";
import { Input } from "../Input/Input";
import { Task } from "../Task/Task";

export const List = () => {
    useEffect(() => {
        localStorage.clear();
        localStorage.setItem("TodoList", JSON.stringify(tasks));
    });

    const loadingFromLocalStorage = () => {
        const localTodo = JSON.parse(localStorage.getItem("TodoList"));
        if (localTodo === null) {
            return [];
        } else {
            return localTodo;
        }
    };

    const [tasks, setTasks] = useState(loadingFromLocalStorage());

    const addTodo = (text) => {
        const newTask = {
            id: new Date().getTime(),
            date: new Date().toLocaleString(),
            text,
            isCompleted: false,
            change: false,
        };

        setTasks([...tasks, newTask]);
    };

    const removeTodo = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const todoCompleted = (id) => {
        setTasks([
            ...tasks.map((task) =>
                task.id === id
                    ? { ...task, isCompleted: !task.isCompleted }
                    : { ...task }
            ),
        ]);
    };

    const OnChangeTodo = (id) => {
        setTasks([
            ...tasks.map((task) =>
                task.id === id ? { ...task, change: !task.change } : { ...task }
            ),
        ]);
    };

    const ChangeTodoText = (id, text) => {
        setTasks([
            ...tasks.map((task) =>
                task.id === id ? { ...task, text: text, change: !task.change} : { ...task }
            ),
        ]);
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
                        ChangeTodoText={ChangeTodoText}
                        OnChangeTodo={OnChangeTodo}
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
