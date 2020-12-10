import { PostForm, Posts, FetchedPosts } from './components';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <h2></h2>
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
