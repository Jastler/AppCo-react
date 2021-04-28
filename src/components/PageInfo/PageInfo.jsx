import React, { useState, useEffect } from 'react';
import { PageFooter } from '../PageFooter';
import { PageHeader } from '../PageHeader';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";



export const PageInfo = ({ match }) => {
  const [userStatictic, setUserStatictic] = useState([]); 

  const usersLink = `https://app-co-server-taraschirkov.herokuapp.com/api/info/`;
  const userID = match.params.id

  useEffect(() => {
    axios.get(`${usersLink}?user=${userID}`).then((resp) => {
      const users = resp.data.data;
      setUserStatictic(users);
    });
  }, []);

  const date = userStatictic.map(dates => dates.date);
  const clicks = userStatictic.map(user => user.clicks);
  const pageViews = userStatictic.map(user => user.page_views);

  return (
    <>
      <PageHeader />
        {userStatictic.length && (
          <nav className="navigation">
          <div className="wrapper">
            <Link className="navigation__link" to="/">
              Main page
            </Link>
            <span className="navigation__arrow">
              <FontAwesomeIcon icon={faChevronRight} /> 
            </span>
            <Link className="navigation__link" to="/stats">
              User satistics
            </Link>
            <span className="navigation__arrow">
              <FontAwesomeIcon icon={faChevronRight} /> 
            </span>
            <Link className="navigation__link navigation__link_active" to="/stats">
              {userStatictic[0].first_name} {userStatictic[0].last_name}
            </Link>
          </div>
        </nav>
        )}
      <div>
        <Line
          data={{
            labels: date,
            datasets: [
              {
                label: 'Clicks',
                data: clicks,
                borderColor: [
                  'rgb(58, 128, 186)',
                ],
                borderWidth: 5,
                tension: 0.4
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            elements: {
              point:{
                  radius: 0
              }
            },
          }}
        />
      </div>
      <div>
        <Line
            data={{
              labels: date,
              datasets: [
                {
                  label: 'Page Views',
                  data: pageViews,
                  borderColor: [
                    'rgb(58, 128, 186)',
                  ],
                  borderWidth: 5,
                  tension: 0.4
                },
              ],
            }}
            height={400}
            width={600}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
              elements: {
                point:{
                    radius: 0
                }
              },
            }}
          />
      </div>
      <PageFooter />
    </>
  )
};
