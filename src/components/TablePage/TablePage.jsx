import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { PageHeader } from '../PageHeader';
import { PageFooter } from '../PageFooter';
import { Link } from "react-router-dom";


export const TablePage = ({ match }) => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(+match.params.pageId || 1);
  const [tableLenth, setTableLength] = useState(0);

  const usersUrl = `https://app-co-server-taraschirkov.herokuapp.com/api/users`;
  const tableLength = 'https://app-co-server-taraschirkov.herokuapp.com/api/pages';

  useEffect(() => {
    axios.get(tableLength).then((resp) => {
      const length = resp.data.data;
      setTableLength(length[0].count/50);
    });
  }, []);

  useEffect(() => {
    axios.get(`${usersUrl}?page=${currentPage}&limit=50`).then((resp) => {
      const users = resp.data.data;
      setUsers(users);
    });
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage === 1) {
      return;
    }

    setCurrentPage(currentPage - 1);
  };

  const prevPage = () => {
    if (tableLenth === currentPage) {
      return;
    }
    setCurrentPage(currentPage + 1);
  }

  return (
    <>
      <PageHeader />
      <div className="table-page">
        <nav className="table-page__navigation navigation">
          <div className="wrapper">
            <Link className="navigation__link" to="/">
              Main page
            </Link>
            <span className="navigation__arrow">
              <FontAwesomeIcon icon={faChevronRight} /> 
            </span>
            <Link className="navigation__link navigation__link_active" to="/stats">
              User satistics
            </Link>
          </div>
        </nav>
        <div className="wrapper">
          <h2 className="table-page__title">
            Users statistics
          </h2>
        </div>
        <div className="wrapper">
          <table className="table-page__table table">
              <thead className="table__header">
                <tr>
                  <th className="table__head">id</th>
                  <th className="table__head">First name</th>
                  <th className="table__head">Last name</th>
                  <th className="table__head">Email</th>
                  <th className="table__head">Gender</th>
                  <th className="table__head">IP address</th>
                  <th className="table__head">Total clicks</th>
                  <th className="table__head">Total page views</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.user_id} className="table__row">
                    <td className="table__column">
                      <Link className="table__link" to={`/info/${user.user_id}`}>
                        {user.user_id}
                      </Link>
                    </td>
                    <td className="table__column">
                      <Link className="table__link" to={`/info/${user.user_id}`}>
                        {user.first_name}
                      </Link>
                    </td>
                    <td className="table__column">
                      <Link className="table__link" to={`/info/${user.user_id}`}>
                        {user.last_name}
                      </Link>
                    </td>
                    <td className="table__column">
                      <Link className="table__link" to={`/info/${user.user_id}`}>
                        {user.email}
                      </Link>
                    </td>
                    <td className="table__column">
                      <Link className="table__link" to={`/info/${user.user_id}`}>
                        {user.gender}
                      </Link>
                    </td>
                    <td className="table__column">
                      <Link className="table__link" to={`/info/${user.user_id}`}>
                        {user.ip_address}
                      </Link>
                    </td>
                    <td className="table__column">
                      <Link className="table__link" to={`/stats/${user.user_id}`}>
                        {user.total_clicks}
                      </Link>
                    </td>
                    <td className="table__column">
                      <Link className="table__link" to={`/stats/${user.user_id}`}>
                        {user.total_page_views}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
          <div className="table-page__buttons">
            <Link to={`/stats/${currentPage - 1}`} className={classNames(
              'table-page__button-arrow', {'table-page__button-arrow_active': currentPage !== 1},
              )}
              onClick={nextPage}
            >
              <FontAwesomeIcon icon={faChevronLeft} /> 
            </Link>
            <div className="table-page__button">
              {currentPage}
            </div>
            <Link to={`/stats/${currentPage + 1}`} className={classNames(
              'table-page__button-arrow', {'table-page__button-arrow_active': currentPage !== tableLenth},
              )}
              onClick={prevPage}
            >
              <FontAwesomeIcon icon={faChevronRight} /> 
            </Link>
          </div>
        </div>
      </div>
      <PageFooter />
    </>
  );
};
