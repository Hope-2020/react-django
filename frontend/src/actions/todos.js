import axios from 'axios';
import { GET_TODOS } from './types';
import { reset } from 'redux-form';
import history from '../history';
import { GET_TODOS, ADD_TODO, DELETE_TODO } from './types';

export const getTodos = () => async dispatch => {
    const res = await axios.get('/api/todos');
    dispatch({
        type: GET_TODOS,
        payload: res.data
    });
};

export const addTodo = formValues => async dispatch => {
    const res = await axios.post('/api/todos/', {...formValues });
    dispatch({
        type: ADD_TODO,
        payload: res.data
    });
    dispatch(reset('todoForm'));
};

// GET TODO
export const getTodo = id => async dispatch => { // added
    const res = await axios.get(`/api/todos/${id}/`);
    dispatch({
      type: GET_TODO,
      payload: res.data
    });
};
  
  // DELETE TODO
export const deleteTodo = id => async dispatch => { // added
    await axios.delete(`/api/todos/${id}/`);
    dispatch({
        type: DELETE_TODO,
        payload: id
    });
history.push('/');
}