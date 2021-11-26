import React, { useState } from "react";
import { StyledInput, InputBlock, AddButton } from "./Input.styles";

export const Input = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const addTodoInList = () => {
        if (value.trim().length !== 0) {
            addTodo(value.trim());
            setValue("");
        }
    };

    const handleSubmit = (e) => {
        if (e.code === "Enter") {
            addTodoInList();
        }
    };

    return (
        <InputBlock>
            <StyledInput
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleSubmit}
                placeholder="Введи задачу"
            />
            <AddButton onClick={addTodoInList}>Добавить задание</AddButton>
        </InputBlock>
    );
};
