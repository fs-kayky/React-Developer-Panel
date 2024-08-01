import styled from 'styled-components';

export const Container = styled.div<{dialog: string}>`

    /* @media (max-width: 479px) {
        display: none;
    } */

    display: flex;
    min-height: calc(100vh - 70px);
    overflow: hidden;
    max-width: 100vw;
    background-color: #acadaf;

    aside {
        margin: auto;
    }

    .shadow {
        display: ${props => eval(props.dialog) ? 'flex' : 'none'};
        position: fixed;
        justify-content: center;
        align-items: center;
        width: 100vw;
        overflow: hidden;
        background-color: rgba(0,0,0,0.5);
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .dialog {
        display: ${props => eval(props.dialog) ? 'flex' : 'none'};
        position: fixed;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 20px;
        background-color: #fff;
        border-radius: 15px;
        width: 500px;
        height: 360px;
        z-index: 999;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        overflow: hidden;

        &__tittle {
            display: flex;
            font-size: 1em;
            
        }

        &__features {
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 20px;
        }

        &__input {
            font-family: 'Roboto', sans-serif;
            height: 40px;
            width: 300px;
            padding: 10px;
            border-radius: 15px;
            border: 1px solid #000;
            
        }

        &__button {
            height: 3rem;
            width: 100%;
            border-radius: 15px;
            border: 1px solid #000;
            background-color: #007858;
            color: #fff;
            cursor: pointer;
            transition: 0.3s;

            &:hover {
                background-color: #00523c;
            }
        }
    }
   
   .header {
         display: flex;
         width: 100vw;
         justify-content: center;   
         align-items: center;
         flex-direction: column;
         padding: 20px;
         gap: 20px;

         &__tittle {
            display: flex;
            font-size: 3rem;
            color: #007858;
            white-space: nowrap;

            @media (max-width: 768px) {
                font-size: 2rem;
            }

        }

        &__button {
            display: flex;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            background-color: #FFF;
            border: none;
            transition: 0.3s;
            
            cursor: pointer;
            &:hover {
                background-color: #007858;
                border: 1px solid #000;
            }
        }
   }
   
   .main {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    padding-bottom: 40px;
   }

   .gallery {
        justify-content: center;
        flex-direction: column;
        padding: 30px;
        border-radius: 15px;
        background-color: #FFF;

        &__image {
            height: 250px;
            width: 100%;
        }

        &__description {
            background-color: #007858;
            font-size: 1.5rem;
            color: #FFF;
            width: 100%;
            height: 100%;
            text-align: center;
            padding: 10px;
        }


        &__item {
            align-items: center;
            justify-content: center;
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            border: 10px solid #007858;
        }
        
        &__grid {

            @media (min-width: 480px) {
                grid-template-columns: repeat(1, 1fr);
            }

            @media (min-width: 768px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media (min-width: 1200px) {
                grid-template-columns: repeat(3, 1fr);
            }

            @media (min-width: 1600px) {
                grid-template-columns: repeat(4, 1fr);
            }

            margin: auto;
            display: grid;
            gap: 20px;
        }

    }

    .remove {
        background-color: #ff0000;
        &:hover {
            background-color: #c90000;
        }
    }

`;

export const Shadow = styled.div<{dialog: string}>`
        display: ${props => eval(props.dialog) ? 'flex' : 'none'};
        .shadow {
        display: ${props => eval(props.dialog) ? 'flex' : 'none'};
        justify-content: center;
        align-items: center;
        width: 100vw;
        overflow: hidden;
        background-color: rgba(0,0,0,0.5);
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

`