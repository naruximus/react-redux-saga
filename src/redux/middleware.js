import { CREATE_POST } from './types';
import { showAlert } from './actions';

const forbidden = ['fuck', 'php', 'spam'];

export const forbiddenWords = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter((word) =>
          action.payload.title.includes(word)
        );
        if (found.length) {
          return dispatch(showAlert('Обнаружен спам!'));
        }
      }
      return next(action);
    };
  };
};
