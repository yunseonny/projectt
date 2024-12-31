import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<User />} />
                {/* 추가 라우트 정의 가능 */}
            </Routes>
        </Router>
    );
}

export default App;
