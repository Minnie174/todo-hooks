import React, {Component, useEffect, useState} from 'react';
import classNames from 'classnames';

import './task.css';

const Task = ({label, time, completed, isEdit, onDeleted, onToggleCompleted, onEditItem, onEdit}) => {
    const [labelTask, setLabel] = useState(label);
    const [timer, setTimer] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    const onEditChange = (e) => {
        setLabel(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onEdit(labelTask);
        setLabel('');
    }

    useEffect(() => {
        let interval;
        if (timerOn) {
            interval = setInterval(() => {
                setTimer(prevTime => prevTime + 1000)
            }, 1000)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [timerOn])

    const checkTwoDigits = (t) => {
        if (t < 10) {
            return "0" + t;
        }
        return t;
    };

    const makeTimeReadable = (t) => {
        const timeInSec = t / 1000;
        const mins = Math.floor((timeInSec / 60));
        const sec = timeInSec - mins * 60;
        return `${checkTwoDigits(mins)}:${checkTwoDigits(sec)}`
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
                    <button type="button" className="icon icon-play" onClick={() => setTimerOn(true)}></button>
                    <button type="button" className="icon icon-pause" onClick={() => setTimerOn(false)}></button>
                    <span className="timer">{makeTimeReadable(timer)}</span>
                </div>
                <span className="created">{time}</span>
            </label>
            <button type="button" className="icon icon-edit" onClick={onEditItem} />
            <button type="button" className="icon icon-destroy" onClick={onDeleted} />
        </form>
    )
}

export default Task;
