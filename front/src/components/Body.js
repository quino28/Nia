import { Routes, Route, Link } from 'react-router-dom';
import { css } from '@emotion/react'

export const Body = () => {
  return (
    <>
      <div css={ styles.mainVisualArea }>
        <ul>
          <button className={ 'slick-prev' } css={ styles.slick }>
            Previous
          </button>
          <div>
            <div style={{ textAlign: 'center' }}> {/* delete style after develop */ }
              <li>
                <Link to="/about">
                 <img src={`${process.env.PUBLIC_URL}/noimage.png`} alt={ 'no-img' } />
                </Link>
              </li>
            </div>
          </div>
          <button className={ 'slick-next' } css={ styles.slick }>
            Next
          </button>
        </ul>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}

const styles = {
  mainVisualArea: css`
    background-color: #e6e6fa;
    ul {
      height: 100%;
      position: relative;
    }
  `,
  slick: css`
    width: 28px;
    height: 100%;
    position: absolute;
    top: 50%;
    cursor: pointer;
    transform: translate(0, -50%);
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
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
  `,
  slickNext: css`
    &:hover {
      background-color: rgba(255,255,255,0.5);
    }
  `,
}
