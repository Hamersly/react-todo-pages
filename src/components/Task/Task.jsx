import React from "react";
import {
    TaskWrapper,
    TaskText,
    TaaskBlock,
    DateBlock,
    RemoveButton,
    Date
} from "./Task.styles";

export const Task = ({ task, removeTodo, todoCompleted }) => {
    return (
        <TaaskBlock>
            <DateBlock>
                <Date>{task.date}</Date>
                <RemoveButton onClick={() => removeTodo(task.id)}>
                удалить
            </RemoveButton>
            </DateBlock>
            <TaskWrapper onClick={() => todoCompleted(task.id)}>
                {task.isCompleted ? 
                    <TaskText Completed={"text-decoration: line-through;"}>
                        {task.text}
                    </TaskText>
                 : <TaskText>{task.text}</TaskText>
                }
            </TaskWrapper>
            
        </TaaskBlock>
    );
};
