import { Card } from 'react-bootstrap';

function Post({ post }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Post;
