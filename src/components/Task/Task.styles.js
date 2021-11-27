import styled from "styled-components";

export const TaskWrapper = styled.div`
    display: flex;
    padding: 15px;
    margin: 5px 0;
    justify-content: space-between;
    align-items: center;
`;

export const TaaskBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-around;
    margin: 30px 0 0 0 ;
    box-shadow: 0 0 10px 5px black;
    background-color: #A9A9A9;
    border-radius: 30px;
`;

export const DateBlock = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Date = styled.h3`
    color: orange;
    margin: 15px 0 15px 15px;
    width: auto;
    text-shadow: 1px 1px 2px black;
`;

export const RemoveButton = styled.button`
    background-color: orange;
    border: none;   
    padding: 10px;
    margin: 15px 15px;
    border-radius: 0%;
    box-shadow: 0 0 10px 3px black;
`;

export const TaskText = styled.h3`
    ${(props) => props.Completed};
    word-break: break-all;
    color: 
`;
