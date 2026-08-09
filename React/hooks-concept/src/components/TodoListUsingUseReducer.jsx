import React, { useReducer } from 'react'

const init = [
    {
        id: 1,
        text: "Read Something New",
        isComplete: false
    }
]

const reduce = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state,
                {
                    id: 2,
                    text: "Learn Consistency",
                    isComplete: false
                }
            ]
            break;

        case "COMPLETE_TASK":
            return state.map(task =>
                task.id === action.payload
                    ? { ...task, isComplete: !task.isComplete }
                    : task
            )
            break;

        default:
            return state
            break;
    }
}
function TodoListUsingUseReducer() {
    const [task, dispatch] = useReducer(reduce, init)
    return (
        <div>
            <button onClick={() => dispatch({type: "ADD_TASK"})}>Add Task</button>
            {
                task.map((t) => (
                    <div className='task' key={t.id}>
                        <h2>Todo</h2>
                        <p>Id: {t.id}</p>
                        <p>Task: {t.text}</p>
                        <p>Status: {t.isComplete ? "Completed" : "Pending"}</p>
                        <button onClick={() => dispatch({type: "COMPLETE_TASK", payload: t.id})}>Completed</button>
                    </div>
                ))
            }

        </div>
    )
}

export default TodoListUsingUseReducer
