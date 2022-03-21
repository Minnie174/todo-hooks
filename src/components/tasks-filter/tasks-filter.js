import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./tasks-filter.css";

const TasksFilter = ({onFilterChange, filter}) => {

  const filterButtons = [
    {name: "all", label: "All", active: filter === 'all'},
    {name: "active", label: "Active", active: filter === 'active'},
    {name: "completed", label: "Completed", active: filter === 'completed'},
  ];

  const buttons = filterButtons.map(({name, label, active}) => {
    return (
        <li key={name}>
          <button
              key={name}
              name={name}
              type="button"
              onClick={() => onFilterChange(name)}
              className={active ? 'selected' : 'btn'}
          >
            {label}
          </button>
        </li>
    )
  })

  return <ul className="filters">{buttons}</ul>
}

TasksFilter.defaultProps = {
    onFilterChange: () => {},
}

TasksFilter.propTypes = {
    onFilterChange: PropTypes.func,
}
export default TasksFilter;


