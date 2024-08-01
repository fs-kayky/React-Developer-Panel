import styled from 'styled-components';

export const Container = styled.div<{active: string}>`
        .sidebar {
            width: ${prosp => eval(prosp.active) ? '250px' : '0'};
            transition: .3s ease-in-out;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            background: #3d3b40;
            z-index: 99;
            overflow: hidden;
        }
        .shadow {
            display: ${prosp => eval(prosp.active) ? 'block' : 'none'};
            transition: .3s ease-in-out;
            position: fixed;
            top: 0;
            left:0;
            bottom: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1;
        }

        .header {
            border-bottom: 1px solid #454347;
            height: 70px;
            
            display: flex;
            align-items: center;
            justify-content: space-around;
            
            &__title {
                padding-left: 15px;
                color: #fff;
                font-weight: 500;
            }
            &__button {
                display: flex;
                justify-content: center;
                cursor: pointer;
                align-items: center;
                border-radius: 5px;
                border: none;
                background-color: transparent;
                transition: 0.3s;
                &:hover {
                    background: #68656b;
                }
            }
        }
    
    .aside {
        display: flex;
        flex-direction: column;

        &__link {
            padding: 10px 10px;
            text-decoration: none;
            color: #fff;
            font-size: 22px;
            border-bottom: 1px solid #454347;
            transition: 0.4s ease-in-out;
            white-space: nowrap;

            display: flex;
            align-items: center;
            gap: 10px;

            &:hover {
                background-color: #5e5b61;
                border-left: 5px solid #2e09e6;
            }
        }
    }

    .footer {
        position: fixed;
        bottom: 0;
        width: ${prosp => eval(prosp.active) ? '250px' : '0'};
        height: 60px;
        overflow: hidden;
        transition: .3s ease-in-out;
        
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 2px solid #454347;

        &__button {
            background-color: transparent;
            border: none;
            cursor: pointer;
            padding: 5px;
            border-radius: 5px;
            transition: 0.3s;
            
            &:hover {
                    background: #68656b;
                }
        }
    }

`;
