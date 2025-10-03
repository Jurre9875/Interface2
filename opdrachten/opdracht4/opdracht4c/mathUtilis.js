import {logMessage} from './logger.js';

export function add(a, b){
    const message = logMessage([a, b]);
    return a + b;
}

export function substract(a, b){
    const message = logMessage([a, b]);
    return a - b ;
}