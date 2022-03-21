import React, { Component, useState } from 'react';
import classNames from 'classnames';

import './task.css';

const Task = ({label, time, completed, isEdit, onDeleted, onToggleCompleted, onEditItem, onEdit}) => {
    const [labelTask, setLabel] = useState(label);
    const [timer, setTimer] = useState(0);

    const onEditChange = (e) => {
        setLabel(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onEdit(labelTask);
        setLabel('');
    }

    const btn = classNames('btn', {
        'completed': completed,
        'editing': isEdit
    })

    if (isEdit) {
        return (
            <div>
                <form className={btn} onSubmit={onSubmit}>
                    <input className="toggle"
                           type="checkbox"
                           onClick={onToggleCompleted} />
                    <label>
                        <input className="edit"
                               type="text"
                               placeholder={label}
                               value={labelTask}
                               onChange={onEditChange}
                        />
                    </label>
                </form>
                <button type="button" className="icon icon-edit"
                />
                <button type="button" className="icon icon-destroy"
                        onClick={onDeleted} />
            </div>
        )
    }
    return (
        <form className={btn}>
            <input className="toggle"
                   type="checkbox"
                   onClick={onToggleCompleted}/>
            <label>
                <span className="title">{label}</span>
                <div className="description">
                    {/*<button type="button" className="icon icon-play" onClick={this.onTimer}></button>*/}
                    {/*<button type="button" className="icon icon-pause" onClick={this.onPause}></button>*/}
                    {/*<span className="timer">{this.makeTimeReadable(this.state.timer)}</span>*/}
                </div>
                <span className="created">{time}</span>
            </label>
            <button type="button" className="icon icon-edit" onClick={onEditItem} />
            <button type="button" className="icon icon-destroy" onClick={onDeleted} />
        </form>
    )
}


export default Task;

// export default class Task extends Component {
//     state = {
//         label: this.props.label,
//         timer: 0
//     }
//
//     onEditChange = (e) => {
//         this.setState({
//             label: e.target.value
//         });
//     };
//
//     onSubmit = (e) => {
//         e.preventDefault();
//         this.props.onEdit(this.state.label);
//         this.setState({
//             label: ""
//         });
//     };
//
//     onTimer = (e) => {
//         e.preventDefault();
//         this.myInterval = setInterval(() => {
//             this.setState({
//                 timer: this.state.timer + 1000
//             })
//         }, 1000)
//     }
//
//     onPause = (e) => {
//         e.preventDefault()
//         clearInterval(this.myInterval)
//     }
//
//     makeTimeReadable = (t) => {
//         const timeInSec = t / 1000;
//         const mins = Math.floor((timeInSec / 60));
//         const sec = timeInSec - mins * 60;
//         return `${this.checkTwoDigits(mins)}:${this.checkTwoDigits(sec)}`
//     }
//
//     checkTwoDigits = (t) => {
//         if (t < 10) {
//             return "0" + t;
//         }
//         return t;
//     };
//
//     componentWillUnmount() {
//         clearInterval(this.myInterval)
//     }
//
//     render() {
//         const { label, time, completed, isEdit, onDeleted, onToggleCompleted, onEditItem } = this.props;
//
//         let classNames = 'btn';
//         if (completed) {
//           classNames += " completed";
//         }
//         if (isEdit) {
//             classNames += " editing";
//         }
//
//         if (isEdit) {
//             return (
//                 <div>
//                 <form className={classNames} onSubmit={this.onSubmit}>
//                     <input className="toggle"
//                            type="checkbox"
//                            onClick={onToggleCompleted} />
//                     <label>
//                         <input className="edit"
//                                type="text"
//                                placeholder={label}
//                                value={this.state.label}
//                                onChange={this.onEditChange}
//                         />
//                     </label>
//                 </form>
//                     <button type="button" className="icon icon-edit"
//                     />
//                     <button type="button" className="icon icon-destroy"
//                             onClick={onDeleted} />
//                 </div>
//             )
//         } else {
//             return (
//                 <form className={classNames}>
//                     <input className="toggle"
//                            type="checkbox"
//                            onClick={onToggleCompleted}/>
//                     <label>
//                         <span className="title">{label}</span>
//                         <div className="description">
//                             <button type="button" className="icon icon-play" onClick={this.onTimer}></button>
//                             <button type="button" className="icon icon-pause" onClick={this.onPause}></button>
//                             <span className="timer">{this.makeTimeReadable(this.state.timer)}</span>
//                         </div>
//                         <span className="created">{time}</span>
//                     </label>
//                     <button type="button" className="icon icon-edit" onClick={onEditItem} />
//                     <button type="button" className="icon icon-destroy" onClick={onDeleted} />
//                 </form>
//             );
//         };
//     };
// };
