import { Routes, Route } from 'react-router-dom';
import Base from './pages/Base';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Base />} />
    </Routes>
  )
}

export default App;