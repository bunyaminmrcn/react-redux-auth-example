import { AUTH_USER } from './types';
import axios from 'axios';

export const signup = (formProps) => dispatch => {
    return axios.post('http://localhost:3090/api/auth/signup',formProps)
}
