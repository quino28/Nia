import { useState } from "react";
import { Link } from 'react-router-dom';
// import { Routes, Route, Link } from 'react-router-dom';
import { css } from '@emotion/react'
import Slider from "react-slick";

export const Body = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
  }
  return (
    <>
      <div css={ styles.mainVisualArea }>
        <ul>
          <Slider { ...sliderSettings }>
          {['noimage.png', 'move_test.jpg'].map((image, index) => (
            <li key={ index } style={{ width: '100%' }}>
              <Link to="/about">
               <img src={`${process.env.PUBLIC_URL}/${image}`} alt={ 'no-img' } />
              </Link>
            </li>
          ))}
          </Slider>
        </ul>
      </div>
      {
      /*
       * <nav>
       *   <ul>
       *     <li>
       *       <Link to="/">Home</Link>
       *     </li>
       *     <li>
       *       <Link to="/about">About</Link>
       *     </li>
       *     <li>
       *       <Link to="/users">Users</Link>
       *     </li>
       *   </ul>
       * </nav>
       * <Routes>
       *   <Route path="/about" element={<About />} />
       *   <Route path="/users" element={<Users />} />
       *   <Route path="/" element={<Home />} />
       * </Routes>
       */
       }
    </>
  )
}

// function Home() {
  // return <h2>Home</h2>
// }

// function About() {
  // return <h2>About</h2>
// }

// function Users() {
  // return <h2>Users</h2>
// }

const styles = {
  mainVisualArea: css`
    background-color: #e6e6fa;
    ul {
      height: 100%;
      position: relative;
    }
    img {
      max-width: 100%;
      max-height: 300px;
      margin: auto;
    }
    button {
      width: 28px;
      height: 100%;
      z-index: 80;
      &:hover {
        background-color: rgba(255,255,255,0.5);
      }
      &.slick-prev {
        left: 0;
        &:before {
          content: "";
          position: absolute;
          left: 10px;
          width: 20px;
          height: 20px;
          border-top: 2px solid #fff;
          border-left: 2px solid #fff;
          transform: rotate(-45deg);
          transition: all .2s;
        }
      }
      &.slick-next {
        right: 0;
        &:before {
          content: "";
          position: absolute;
          right: 10px;
          width: 20px;
          height: 20px;
          border-top: 2px solid #fff;
          border-right: 2px solid #fff;
          transform: rotate(45deg);
          transition: all .2s;
        }
      }
    }
  `,
}
