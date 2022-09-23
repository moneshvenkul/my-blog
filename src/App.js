import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/Home.js';
import About from './pages/About.js';
import Article from './pages/Article.js';
import ArticlesList from './pages/ArticlesList.js';


function App() {
  return (
    <div className="max-w-screen-md mx-auto pt-20">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/articles-list" element={<ArticlesList />} />
      <Route path="/article" element={<Article />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
