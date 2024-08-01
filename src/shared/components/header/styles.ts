import styled from 'styled-components';

export const Container = styled.div`
    z-index: 999;
    height: 70px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #3d3b40;
    color: #FFF;

    .sideBar__button {
        height: 30px;
        width: 30px;
        border-radius: 8px;
        border: none;
        background-color: #3d3b40;
        cursor: pointer;
        transition: 0.3s all;

        & :hover {
            border-radius: 8px;
            background-color: #68656b;
        }
    }
`;
