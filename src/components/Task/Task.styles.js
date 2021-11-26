import styled from "styled-components";
import { MyButton } from "../List/List.styles";

export const TaskWrapper = styled.div`
    display: flex;
    padding: 15px;
    border: 2px solid;
    margin: 5px 0;
    justify-content: space-between;
    align-items: center;
`;

export const TaaskBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-around;
    margin: 15px 0;
`;

export const RemoveButton = styled(MyButton)`
    border-color: red;
`;

export const TaskText = styled.h3`
    ${(props) => props.Completed};
    word-break: break-all;
`;
