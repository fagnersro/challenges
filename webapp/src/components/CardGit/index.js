import { useState, useEffect } from 'react';
import api from '../../services/api';

import './style.css';

export default function CardGit() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    api
      .get('fagnersro/repos')
      .then(({ data }) => {
        setRepos(data.slice(0, 4));
      })
      .catch(err => {
        console.log('Não conseguimos ' + err);
      });
  }, []);

  return (
    <div className="wrap-components">
      {repos.map(item => {
        return (
          <div className="container-card">
            <h2>
              <a href={item.html_url} target="_blanc">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-folder"
                >
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                {item.name}
              </a>
            </h2>
            <p>{item.description}</p>
            <div className="store-icons">
              <ul>
                <li className="two-links">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <p>{item.stargazers_count}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-git-branch"
                  >
                    <line x1="6" y1="3" x2="6" y2="15"></line>
                    <circle cx="18" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M18 9a9 9 0 0 1-9 9"></path>
                  </svg>
                  <p>{item.forks_count}</p>
                </li>
                <li>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="7.5"
                      cy="7.5"
                      r="6.5"
                      fill="#E7DE79"
                      stroke="#837E9F"
                      stroke-width="2"
                    />
                  </svg>
                  <p>{item.language}</p>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
