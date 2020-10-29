import Post from './Post'
import { Navbar } from '../presentational/Navbar';

function App() {
  return (
    <div className="bg-dark">
      <Navbar />

      <div className="d-flex justify-content-center pb-5">
        <Post />
      </div>

    </div>
  );
}

export default App;
