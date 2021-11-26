import styled from "styled-components";

export const ListWrapper = styled.div``;
export const TasksList = styled.div``;
export const MyButton = styled.button`
    padding: 5px 15px;
    font-size: 20px;
    background: transparent;
    border: 2px solid;
    margin: 5px auto;
`;

export const RemoveTasksButton = styled(MyButton)`
    background-color: orange;
`;

export const RemoveTasksBlock = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;
