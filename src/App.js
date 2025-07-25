import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import navigationData from './data/navigation.json';
import Home from './components/Home';
import Solutions from './components/Solutions';
import Products from './components/Products';
import Projects from './components/Projects';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';

// Custom NavLink component to handle active state
const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
                  (to === '/' && location.pathname === '/');
  
  return (
    <li>
      <Link to={to} className={isActive ? 'active' : ''}>
        {children}
      </Link>
    </li>
  );
};

function App() {
  const [showFooter, setShowFooter] = useState(true);

  return (
    <Router>
      <div className="app">
        {/* 头部区域 */}
        <header className="app-header">
          <div className="header-content">
            <div className="logo-container">
              <img src="/images/branding/logo.png" alt="公司标志" className="logo" />
            </div>
            <nav>
              <ul className="nav-links">
                {navigationData.navigationItems
                  .sort((a, b) => a.order - b.order)
                  .map(item => (
                    <NavLink key={item.id} to={item.path}>{item.label}</NavLink>
                  ))
                }
              </ul>
            </nav>
          </div>
        </header>

        {/* 主要内容区域 */}
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home setShowFooter={setShowFooter} />} />
            <Route path="/solutions" element={<Solutions setShowFooter={setShowFooter} />} />
            <Route path="/products" element={<Products setShowFooter={setShowFooter} />} />
            <Route path="/projects" element={<Projects setShowFooter={setShowFooter} />} />
            <Route path="/news" element={<News setShowFooter={setShowFooter} />} />
            <Route path="/about" element={<About setShowFooter={setShowFooter} />} />
            <Route path="/contact" element={<Contact setShowFooter={setShowFooter} />} />
          </Routes>
        </main>

        {/* 页脚区域 - 条件渲染 */}
        {showFooter && (
          <footer className="app-footer">
            <p>&copy; 2023 会智科技. 保留所有权利。</p>
          </footer>
        )}
      </div>
    </Router>
  );
}

export default App;