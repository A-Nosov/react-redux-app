import * as actionTypes from './actionTipes'

export function titleChanged(id) {
    return {
        type: actionTypes.taskUpdated,
        payload: { id, title: `New title for ${id}` }
    }
}
export function taskCompleted(id) {
    return {
        type: actionTypes.taskUpdated,
        payload: { id, completed: true }
    }
}
export function taskDeleted(id) {
    return {
        type: actionTypes.taskDeleted,
        payload: { id }
    }
}
