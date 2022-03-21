import React, { Component, useState } from 'react';

import './new-task-form.css';

const NewTaskForm = ({onAdd}) => {
  const [label, setLabel] = useState('');

  const onLabelChange = (e) => {
    setLabel(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(label);
    setLabel('');
  }

  return (
      <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="What needs to be done?"
            onChange={onLabelChange}
            className="new-todo"
            value={label}
        />
      </form>
  )
}

export default NewTaskForm;

