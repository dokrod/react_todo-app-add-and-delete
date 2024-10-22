import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 1623;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const createTodo = ({
  title,
  userId = USER_ID,
  completed,
}: Omit<Todo, 'id'>) => {
  return client.post<Todo>(`/todos`, {
    title,
    userId,
    completed,
  });
};