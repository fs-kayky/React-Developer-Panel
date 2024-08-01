import styled from 'styled-components';

export const Container = styled.div`
    min-height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    overflow: hidden;

    background-color: #b3b5b4;
    padding: 35px;

    .section {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items:center;
      
      box-shadow: 30px 34px 17px 0px rgba(0,0,0,0.1);
      width: 550px;
      background-color: #fff;
      border-radius: 25px;
    }

    .header {
      padding-top: 30px;
      display: flex;
      &__title {
        white-space: nowrap;
        font-family: "Edu AU VIC WA NT Hand", cursive;
        font-size: 44px;
        font-weight: 400;

      }
    }

    .main {
      padding: 20px;
      display: flex;
      width: 100%;
      justify-content: center;
      flex-direction: column;

      &__input {
        height: 40px;
        width: 100%;
        padding: 10px;
        border-radius: 15px;
        font-family: Montserrat, sans-serif;
        font-weight: 600;
      }

      &__ul {
        padding: 10px;
      }

      &__list {
        padding: 3px;
        display: flex;
        list-style: none;
      }

      &__li {
        text-transform: capitalize;
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 20px;
        border-radius: 5px;
        border: 1px solid #cfcfcf;
        cursor: pointer;
        width: 100%;

        .todo {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          user-select: none;
          font-size: 16px;
          font-weight: 500;
          font-family: "Montserrat", sans-serif;

        }

        .checked {
          text-decoration: line-through;
        }
      }

      &__button {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 50px;
        min-width: 50px;
        border-radius: 5px;
        margin-left: 5px;
        background-color: #f54242;
        border: none;
        transition: 0.2s ease-in-out;

        &:hover {
        background-color: #c93838;

        }

      }
    }
    
`;
