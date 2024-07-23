import {HashRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Play1 from './pages/Play1';
import Rive from './pages/Rive';
import Layout from './components/Layout';
import Sendfeedback from './pages/Sendfeedback';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Feedback" element={<Sendfeedback />} />
          <Route path="/Mini-Projects" element={<Play1 />} />
          <Route path="/Mini-Projects/Rive" element={<Rive />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;