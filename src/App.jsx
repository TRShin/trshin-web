import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Play1 from './pages/Play1';
import Rive from './pages/Rive';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <h2>This is a test heading in App component</h2>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Mini-Projects" element={<Play1 />} />
          <Route path="/Mini-Projects/Rive" element={<Rive />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;