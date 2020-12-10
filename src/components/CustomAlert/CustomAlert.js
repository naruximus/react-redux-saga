import { Alert } from 'react-bootstrap';

function CustomAlert({ text, onClick }) {
  return (
    <Alert variant={'danger'} onClick={onClick}>
      {text}
    </Alert>
  );
}

export default CustomAlert;
