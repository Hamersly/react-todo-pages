import styled from "styled-components";
import { MyButton } from "../List/List.styles";

export const InputBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-around;
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: 10px 15px;
    margin-top: 30px;
    border: 1px solid;
`;

export const AddButton = styled(MyButton)`
    margin: 30px auto 0 auto;
`;
