import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Play1 from './pages/Play1';
import Rive from './pages/Rive';
import Layout from './components/Layout';

function App() {
  return (
    <Router basename="/trshin-web">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Mini-Projects" element={<Play1 />} />
          <Route path="Mini-Projects/Rive" element={<Rive />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;