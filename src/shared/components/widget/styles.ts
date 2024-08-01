import styled from 'styled-components';

export const Container = styled.div`
    display : flex;
    justify-content: center;

    .widget {
        background-color: lightblue;
        background-size: cover;
        user-select: none;
        align-items: center;
        display: flex;
        justify-content: space-evenly;
        border: 1px solid #000;
        height: 200px;
        width: 40%;
        border-radius: 30px;
        flex-direction: row;
        padding: 20px;

        &__search {
            border-radius: 10px;
            padding: 30px;
            background-image: linear-gradient(191deg, rgba(249,249,249,0.4332107843137255) 6%, rgba(232,232,232,0.44441526610644255) 54%, rgba(217,217,217,0.7161239495798319) 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            input {
                font-family: 'Roboto', sans-serif;
                text-transform: capitalize;
                font-size: 1rem;
                padding: 10px;
                border-radius: 10px;
                border: 1px solid #000;
                margin-top: 10px;
                background-color: transparent;
                
                &::-webkit-input-placeholder {
                    color: #000;
                    text-transform: none;
                }
            }
        }

        &__temperature {
            background-image: linear-gradient(191deg, rgba(249,249,249,0.4332107843137255) 6%, rgba(232,232,232,0.44441526610644255) 54%, rgba(217,217,217,0.7161239495798319) 100%);
            border-radius: 10px;
            padding: 20px;
            user-select: none;
            width: 30%;
            display: inline-block;
            text-align: center;
            .temperature {
                font-size: 3.5rem;
                font-family: 'Roboto', sans-serif;
            }
            .city {
                font-size: 1.2rem;
                font-family: 'Roboto', sans-serif;
                color: #000;
            }

            .weather {
                text-transform:capitalize;
                font-size: 1.1rem;
                font-family: 'Roboto', sans-serif;
            }
        }
    }

`;

