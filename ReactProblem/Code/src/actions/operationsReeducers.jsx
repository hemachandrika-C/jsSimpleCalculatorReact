export const ADD_OPERATION = 'ADD_OPERATION';
export const ADD_NUMBER = 'ADD_NUMBER';
export const RESTORE_EXPRESSION = 'RESTORE_EXPRESSION';

export const toExpression = (type, payload) => ({
  type,
  payload
});

export const opToExpression = (el) => toExpression(ADD_OPERATION, el);
export const numToExpression = el => toExpression(ADD_NUMBER, el);

export const restoreExpression = (payload) => ({
  type: RESTORE_EXPRESSION,
  payload,
});

