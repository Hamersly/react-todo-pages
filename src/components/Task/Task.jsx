import React from "react";
import { TaskWrapper, TaskText, TaaskBlock, RemoveButton } from "./Task.styles";

export const Task = ({ task, removeTodo, todoCompleted }) => {
    return (
        <TaaskBlock>
            <p>{task.date}</p>
            <TaskWrapper onClick={() => todoCompleted(task.id)}>
                {task.isCompleted ? 
                    <TaskText Completed={"text-decoration: line-through;"}>
                        {task.text}
                    </TaskText>
                 : <TaskText>{task.text}</TaskText>}
            </TaskWrapper>
            <RemoveButton onClick={() => removeTodo(task.id)}>
                Удалить задание
            </RemoveButton>
        </TaaskBlock>
    );
};
