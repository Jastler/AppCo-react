import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { PageHeader } from '../PageHeader';
import { PageFooter } from '../PageFooter';
import { Link } from "react-router-dom";


export const TablePage = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableLenth, setTableLength] = useState(0);

  const usersUrl = `http://localhost:8000/api/users?page=${currentPage}&limit=50`;
  const tableLength = 'http://localhost:8000/api/pages';
  
  useEffect(() => {
    axios.get(tableLength).then((resp) => {
      const length = resp.data.data;
      setTableLength(length[0]['COUNT(*)']/50);
    });
  }, []);

  useEffect(() => {
    axios.get(usersUrl).then((resp) => {
      const users = resp.data.data;
      setUsers(users);
    });
  }, [currentPage]);

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
              &#5171;
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
                  <tr key={user.id} className="table__row">
                    <td className="table__column">{user.user_id}</td>
                    <td className="table__column">{user.first_name}</td>
                    <td className="table__column">{user.last_name}</td>
                    <td className="table__column">{user.email}</td>
                    <td className="table__column">{user.gender}</td>
                    <td className="table__column">{user.ip_address}</td>
                  </tr>
                ))}
              </tbody>
          </table>
          <button
            type="button"
            onClick={() => {
              if (currentPage === 1) {
                return;
              }
              setCurrentPage(currentPage - 1)
            }}
          >
            &lt; 
          </button>
          <button
            type="button"
            onClick={() => {
              if (tableLenth === currentPage) {
                return;
              }
              setCurrentPage(currentPage + 1)
            }}
          >
            &gt;
          </button>
        </div>
      </div>
      <PageFooter />
    </>
  );
};
