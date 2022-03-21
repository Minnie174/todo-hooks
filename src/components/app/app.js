import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

import TaskList from '../task-list';
import Footer from '../footer';
import NewTaskForm from '../new-task-form';

import './app.css';

const App = () => {

  let maxId = 2

  const [todoData, setData] = useState([{
    label: 'task 1',
    timer: 0,
    time: `created ${formatDistanceToNow(new Date(), { addSuffix: true })}`,
    completed: false,
    id: 1,
    isEdit: false,
  }]);

  // const [todoData, setData] = useState([])

  const [newData, setNewData] = useState([])

  const [filter, setFilter] = useState('all');

  const deleteItem = (id) => {
    setData(todoData.filter((el) => el.id !== id));
  }

  const onFilterChange = (filter) => {
    setFilter(filter);
  }

  const filterItems = (todoData, filter) => {
    if (filter === 'all') {
      return todoData
    } else if (filter === 'active') {
      return todoData.filter((el) => !el.completed);
    } else if (filter === 'completed') {
      return todoData.filter((el) => el.completed)
    }
  }

  const createTodoItem = (text) => {
    return ([{
      label: text,
      timer: 0,
      time: `created ${formatDistanceToNow(new Date(), {addSuffix: true})}`,
      completed: false,
      id: new Date().getTime(),
      isEdit: false,
    }])
  }

  const addItem = (text) => {
    const newItem = createTodoItem(text)
    const newArr =
    setData([...todoData].concat(newItem))
  }

  const onToggleCompleted = (id) => {
    setData((todoData) => {
      return (
        todoData.map(el => {
          if (el.id === id) {
            el = {...el, completed: !el.completed}
          }
          return el
        })
    )
    })
  }

  const onAllCompleted = () => {
    setData(todoData.filter((el) => el.completed !== true))
  }

  const onEditItem = (id) => {
    setData((todoData) => {
      return (
          todoData.map(el => {
            if (el.id === id) {
              el = {...el, isEdit: !el.isEdit}
            }
            return el
          })
      )
    })
  }

  const onEdit = (text, id) => {
    setData((todoData) => {
      return (
          todoData.map(el => {
            if (el.id === id) {
              el = {...el, label: text, isEdit: !el.isEdit}
            }
            return el
          })
      )
    })
  }

  const visibleItems = filterItems(todoData, filter);
  const doneCount = todoData.filter((el) => {
    const x = {...el}
    const y = x.completed
    return y.length
  })
  const leftCount = todoData.length - doneCount

  return (
      <section className="todoapp">
        <header className="header">
          <h1>TODO</h1>
          <NewTaskForm onAdd={addItem} />
        </header>
        <section className="main">
          <TaskList
              todos={visibleItems}
              onDeleted={deleteItem}
              onToggleCompleted={onToggleCompleted}
              onEditItem={onEditItem}
              onEdit={onEdit}
          />
          <Footer
              left={leftCount}
              onAllCleared={onAllCompleted}
              filter={filter}
              onFilterChange={onFilterChange}
          />
        </section>
      </section>
  )
}

export default App;

