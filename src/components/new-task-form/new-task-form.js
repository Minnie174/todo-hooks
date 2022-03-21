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

// export default class NewTaskForm extends Component {
//   state = {
//     label: "",
//   };
//
//   onLabelChange = (e) => {
//     this.setState({
//       label: e.target.value,
//     });
//   };
//
//   onSubmit = (e) => {
//     e.preventDefault();
//     this.props.onAdd(this.state.label);
//     this.setState({
//       label: "",
//     });
//   };
//
//   render() {
//     return (
//       <form onSubmit={this.onSubmit}>
//         <input
//           type="text"
//           placeholder="What needs to be done?"
//           onChange={this.onLabelChange}
//           className="new-todo"
//           value={this.state.label}
//         />
//       </form>
//     )
//   }
// }
