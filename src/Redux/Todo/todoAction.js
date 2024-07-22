export const FETCH_TODO_REQUEST = "FETCH_TODO_REQUEST"
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS"
export const FETCH_TODO_FAILURE = "FETCH_TODO_FAILURE"

export const fetchTodoRequest = () => ({
    type: FETCH_TODO_REQUEST
})

export const fetchTodoSuccess = (data) => ({
    type: FETCH_TODO_SUCCESS,
    payload: data
})

export const fetchTodoFailure = (error) => ({
    type: FETCH_TODO_FAILURE,
    payload:error
})