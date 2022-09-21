import Home from './pages/Home.js'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="max-w-screen-md mx-auto pt-20">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
