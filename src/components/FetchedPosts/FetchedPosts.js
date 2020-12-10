import { Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../';
import { fetchPosts } from '../../redux/actions';

function FetchedPosts() {
  const dispatch = useDispatch();
  dispatch(fetchPosts);
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const isLoading = useSelector((state) => state.app.loading);

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  if (!posts.length)
    return (
      <Button onClick={() => dispatch(fetchPosts())} variant="primary">
        Загрузить
      </Button>
    );

  return posts.map((post) => <Post post={post} key={post.id} />);
}

export default FetchedPosts;
