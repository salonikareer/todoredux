import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/TodoSlice'


const AddTodo = () => {

    const [input, setInput] = useState('') 
    const dispatch = useDispatch()

    const handleTodo = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


    return (
        <>
            <form onSubmit={handleTodo} >
                <input  type="text"
                    placeholder='Add Todo'
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <button  type="submit">Add</button>
            </form>
        </>
    )
}

export default AddTodo