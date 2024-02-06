import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

let defaultTodos = [
  { text: "Cortar cebolla con someilin", completed: true },
  { text: 'Tomar el curso', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'lalalala', completed: false },
  { text: 'Usar estados deribados', completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos= todos.length;
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  )

const completeTodo = (text) =>{
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  );
  newTodos[todoIndex].completed = true;
  setTodos(newTodos);
};
const deleteTodo = (text) =>{
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  );
  newTodos.splice(todoIndex, 1);
  setTodos(newTodos);
};

  return (
    <>
      <TodoCounter complete={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setsearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
          ))}
      </TodoList>

     <CreateTodoButton />
    </>
  );
}

export default App;
