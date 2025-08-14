import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PortfolioSection from './components/PortfolioSection';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={PortfolioSection} />
          {/* Additional routes can be added here */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;