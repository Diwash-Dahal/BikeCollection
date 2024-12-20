import React from 'react'
import { Link,NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

export const Nav = ({onhandle}) => {
  
  return (
    <>
        <div>
        <nav className="navbar bg-body-tertiary ">
          <div className="container-fluid">
            <a className="navbar-brand">
              <div className={styles.logo}>
                <img className={styles.logo} src="https://www.shutterstock.com/image-vector/motorcycle-classic-biker-helmet-logo-600nw-2482496613.jpg" alt="" />
              </div>
            </a>

            <form className="d-flex" role="search">
              <input className={styles.input} type="text" placeholder='Search' aria-label='Search' />

              <button className="btn btn-outline-success" type="submit">Search</button>

            </form>
            <button className={styles.btn} 
              onClick={onhandle}
              >Login</button>
          </div>
        </nav> 
      </div>
    </>
  )
}
export default Nav;