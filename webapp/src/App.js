import Profile from './components/Profile';
import Links from './components/Links';
import Technologies from './components/Technologies';
import Experiences from './components/Experiences';
import Education from './components/Education';

import CardGit from './components/CardGit';
// lefts - imports

import Publi from './components/Publi';
import './components/CardGit/style.css';

function App() {
  return (
    <div className="App">
      <div className="box-app">
        <Profile />
        <Links />
        <Technologies />
        <Experiences />
        <Education />
      </div>
      <div className="box-app-right">
        <div className="wrapp-projects">
          <div className="projects">
            <h3>My Projects</h3>
            <span>
              <a
                href="https://github.com/fagnersro?tab=repositories"
                target="blanc"
              >
                Veja todos
              </a>
            </span>
          </div>
          <div className="box-card">
            <CardGit />
          </div>
        </div>
        <div className="wrap-posts">
          <div className="recent-posts">
            <h3>Recent Posts</h3>
          </div>
          <Publi />
        </div>
      </div>
    </div>
  );
}

export default App;
