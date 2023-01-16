import { Route, Routes } from "react-router-dom";
import PostList from "./app/Post/PostList";
import Navbar from "./component/Navbar";
import PostAdd from "./app/Post/PostAdd";
import PostEdit from "./app/Post/PostEdit";

function App() {
  return (
    <div className="">
      <Navbar />
      <section className="max-w-2xl mx-auto pt-8">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/add-post" element={<PostAdd />} />
          <Route path="/edit-post/:id" element={<PostEdit />} />
          
        </Routes>
        
      </section>
    </div>
  );
}

export default App;
