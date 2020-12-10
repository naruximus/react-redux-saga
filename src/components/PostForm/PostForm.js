import { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Alert } from '../';
import { connect } from 'react-redux';
import { createPost, showAlert, hideAlert } from '../../redux/actions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  submitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if (!title.trim()) {
      return this.props.showAlert('Поле заголовок пустое!');
    }
    const newPost = {
      id: Date.now().toString(),
      title,
    };
    this.setState({ title: '' });
    this.props.createPost(newPost);
  };
  changeInputHandler = (event) => {
    this.setState((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }));
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        {this.props.alert && (
          <Alert text={this.props.alert} onClick={this.props.hideAlert} />
        )}

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Заголовок поста</Form.Label>
          <Form.Control
            type="text"
            controlid="title"
            name="title"
            placeholder="Введите текст"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Создать
        </Button>
      </Form>
    );
  }
}
const mapDispatchToProps = {
  createPost,
  showAlert,
  hideAlert,
};
const mapStateToProps = (state) => ({
  alert: state.app.alert,
});
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
