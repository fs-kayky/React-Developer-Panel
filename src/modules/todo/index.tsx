import React, { useEffect, useState } from 'react'
import { ITodo } from '../../shared/interfaces/ITodo'
import { useStorageDb } from '../../shared/hooks/useStorageDb'
import { FaRegTrashAlt } from "react-icons/fa";
import {v4 as UUID } from 'uuid';
import * as C from './styles'

const Todo = () => {

    const ENTER_KEY = 'Enter'
    const STORAGE_KEY = 'BG-TODOS'
    const ESCAPE_KEY = 'Escape'
    
    const [todos, setTodos] = useState<ITodo[]>([])
    const [value, setValue] = useState('')

    const { getItem, setItem } = useStorageDb();

    const handleClickOnTask = (todoId: string) => {
        const todos = JSON.parse(getItem(STORAGE_KEY));
        
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === todoId) {
                todos[i].state = !todos[i].state
                break
            }
        }
        setTodos(todos)
        setItem(STORAGE_KEY, JSON.stringify(todos))
    }

    const eraseValue = () => {
        setValue('');
    }

    const removeTodo = (id: string) => {
        const removedTask = todos.filter(i => i.id !== id);
        
        setItem(STORAGE_KEY, JSON.stringify(removedTask))
        
        return setTodos(removedTask)
    }

    const createTodo = (task: string, state: boolean) => {
        const storageTodos = getItem(STORAGE_KEY)

        if(storageTodos) {
            const todos = JSON.parse(storageTodos)

            const newTodo = {
                id: `${UUID()}`,
                task: `${task}`,
                state: false
            }

            setItem(STORAGE_KEY, JSON.stringify([newTodo, ...todos]))
            return setTodos([newTodo, ...todos])
        }

        const newTodo = {
            id: `${UUID()}`,
            task: `${task}`,
            state: state
        }

        setItem(STORAGE_KEY, JSON.stringify([newTodo, ...todos]))
        return setTodos([newTodo, ...todos])

    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleTaskCreation = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === ENTER_KEY) {
            createTodo(value, false)
            eraseValue()
        }

        if(e.key === ESCAPE_KEY) {
            eraseValue()
        }
    
}

    useEffect(() => {
        const data = getItem(STORAGE_KEY)

        if (data) {
            return setTodos(JSON.parse(data))
        }
    }, [])

    return(
        <C.Container>
        <section className={'section'}>
            <header className={'header'}>
                <h2 className={'header__title'}>Lista de tarefas</h2>
            </header>

            <main className={'main'}>
                <input 
                className={'main__input'}
                type='text'
                placeholder='O que precisa ser feito?'
                value={value}
                onChange={handleOnChange}
                onKeyDown={handleTaskCreation}
                />

                <ul className={'main__ul'}>
                    {todos.map(todos => (
                        <ul className={'main__list'} key={todos.id}>
                            <li onClick={() => handleClickOnTask(todos.id)} className={'main__li'} key={todos.id}>
                                <span
                                role='button'
                                className={`todo ${todos.state ? 'checked' : ''}`}
                                 >
                                    {todos.task}
                                </span>
                                <button className={'main__button'} onClick={() => removeTodo(todos.id)}><FaRegTrashAlt size={25} /></button>
                            </li>
                        </ul>
                    ))}

                </ul>

            </main>

        </section>
        </C.Container>
    )
}

export default Todo