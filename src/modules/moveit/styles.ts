import styled from "styled-components";

export const XpBar = styled.div<{totalxp: string}>`
  .header {
    z-index: 999;
    user-select: none;
    top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: #2e384d;
    color: #fff;
    font-size: 1.5em;

    .bar {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      .bar__body {
        display: block;
        background-color: #FFF;
        border-radius: 10px;
        height: 10px;
        width: 90%;

        .bar__progress {
          border-radius: 10px;
          height: 100%;
          display: block;
          background-color: #4cd62b;
          transition: width 0.5s;
          width: 0%;
        }

    }
    } 


  }
`;

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 140px);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f2f3f5;

  .main {
    height: calc(100vh - 140px);
    margin-top: 20px;
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: center;
    user-select: none;


    .article__user {
      @media (max-width: 600px) {
        margin-top: 30px;
      }

      border-radius: 5px;
      gap: 30px;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: row;
      background-color: #fff;
      grid-column-start: 1;
      width: 100%;
      height: 100%;
      user-select: none;

      .photo {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }

      .info {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .user__name {
          font-size: 1.6rem;
          color: #2c3f63;
        }

        .user__level {
          display: flex;
          flex-direction: row;
          font-weight: 400;
          font-size: 1.2rem;
          gap: 10px;
          color: #666;
        }

        .user__task {
          font-weight: 400;
          font-size: 1.2rem;
          color: #666;
        }
      }

      .user__photo {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 2px solid #2e384d;
      }
    }

    .article__timer {
      border-radius: 5px;
      background-color: #fff;
      grid-row-start: 2;
      width: 100%;
      height: 100%;

      .stopwatch {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 90%;
        font-size: 5rem;
        color: #666;
        font-weight: 600;

        &__number {
          background-color: #e8e8e8;
          border-radius: 5px;
          padding: 10px;
          width: 80px;
          text-align: center;
        }

        .stopwatch__view {
          display: flex;
          gap: 2px;
        }

        .stopwatch__buttons {
          display: flex;
          gap: 10px;
          margin-top: 20px;

          button {
            background-color: #2e384d;
            color: #fff;
            border: none;
            padding: 10px;
            border-radius: 5px;
            font-size: 1.2rem;
            cursor: pointer;

            &:hover {
              background-color: #333;
            }
          }
        }
      }
    }

    .aside {
      border-radius: 5px;
      background-color: #fff;
      grid-column-start: 2;
      grid-row-start: 1;
      grid-row-end: 3;
      width: 100%;
      height: 100%;
    }
  }

  .grid {
    width: 70rem;
    grid-auto-rows: 20rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 15px;
  }

  @media (max-width: 600px) {
    height: calc(100vh);
    display: flex;
    justify-content: space-between;

    .grid {
      display: flex;
      flex-direction: column;
    }

    .main {
      margin-top: 0px;
      display: flex;
      align-items: start;
      .article__timer {
        height: 300px;
      }
    }
  }
`;

export const LandTask = styled.div`
  @media (max-width: 600px) {
    height: 100%;
  }

  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  align-items: center;
  text-align: center;
  .task__tittle {
    padding-left: 20px;
    padding-right: 20px;
    font-size: 2rem;
    color: #666;
  }

  .task__image {
    width: 100px;
    height: 100px;
    border-radius: 25px;
  }

  .task__subtittle {
    padding-left: 90px;
    padding-right: 90px;
    font-size: 1.2rem;
    color: #666;
  }
`;

export const Desafio = styled.div`
  height: 650px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .task__header {
    position: relative;
    text-align: center;
    justify-content: center;
    top: 0;
    width: 70%;
    border-bottom: 2px solid #666;
    display: flex;

    .task__xp {
      padding: 20px;
      font-size: 1.6rem;
      color: #666;
    }
  }

  .task__body {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .task__image {
      height: 200px;
      width: 200px;
    }

    .task__tittle {
      font-family: "Inter", sans-serif;
      font-weight: 600;
      margin-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
      font-size: 2rem;
    }

    .task__description {
      text-align: center;
      padding-inline: 50px;
      font-size: 1.2rem;
      color: #666;
    }

    .task__buttons {
      display: flex;
      gap: 20px;
      margin-top: 20px;

      .task__button {
        color: #fff;
        border: none;
        padding: 15px;
        border-radius: 5px;
        font-size: 1.2rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      .green {
        background-color: #4cd62b;

        &:hover {
          background-color: #39a120;
        }
      }

      .red {
        background-color: #e83f5b;

        &:hover {
          background-color: #bf344b;
        }

      }
    }
  }
`;
