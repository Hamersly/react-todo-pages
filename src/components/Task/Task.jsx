import React, { useState } from "react";
import {
    TaskWrapper,
    TaskText,
    TaskBlock,
    TaskChanger,
    DateBlock,
    RemoveButton,
    ChangeButton,
    SaveButton,
    Date,
    ChangeText,
} from "./Task.styles";

export const Task = ({
    task,
    removeTodo,
    todoCompleted,
    ChangeTodoText,
    OnChangeTodo,
}) => {
    const [value, setValue] = useState(task.text);

    const changeTodo = () => {
        if (value.trim().length !== 0) {
            ChangeTodoText(task.id, value.trim());
            setValue("");
        }
    };

    return (
        <TaskBlock>
            <DateBlock>
                <Date>{task.date}</Date>
                <div>
                    {task.change ? (
                        <ChangeButton
                            onClick={() => OnChangeTodo(task.id)}
                            Color={"background-color: red;"}
                        >
                            ред.
                        </ChangeButton>
                    ) : (
                        <ChangeButton onClick={() => OnChangeTodo(task.id)}>
                            ред.
                        </ChangeButton>
                    )}

                    <RemoveButton onClick={() => removeTodo(task.id)}>
                        x
                    </RemoveButton>
                </div>
            </DateBlock>

            {task.change ? (
                <TaskChanger>
                    <ChangeText
                        defaultValue={task.text}
                        onChange={(e) => setValue(e.target.value)}
                        type="text"
                        wrap="hard"
                        rows="5"
                    ></ChangeText>
                    <SaveButton onClick={changeTodo}>Сохранить</SaveButton>
                </TaskChanger>
            ) : (
                <TaskWrapper onClick={() => todoCompleted(task.id)}>
                    {task.isCompleted ? (
                        <TaskText Completed={"text-decoration: line-through;"}>
                            {task.text}
                        </TaskText>
                    ) : (
                        <TaskText>{task.text}</TaskText>
                    )}
                </TaskWrapper>
            )}
        </TaskBlock>
    );
};
