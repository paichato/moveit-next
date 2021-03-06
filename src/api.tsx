import axios from 'axios'
import { basename } from 'path'

export const api=axios.create({
    baseURL: `https://api.github.com/users`
});