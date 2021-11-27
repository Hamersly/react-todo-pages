import styled from "styled-components";

export const ListWrapper = styled.div``;
export const TasksList = styled.div``;
export const MyButton = styled.button`
    padding: 5px 15px;
    font-size: 20px;
    background: transparent;
    background-color: orange;
    box-shadow: 0 0 10px 2px black;
    border: none;
`;

export const RemoveTasksButton = styled(MyButton)`
    margin-bottom: 30px;
`;

export const RemoveTasksBlock = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;
