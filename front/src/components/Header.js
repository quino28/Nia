import { useState, useEffect, useRef } from "react";
import { css } from '@emotion/react'

export const Header = () => {
  const [ active, setActive ] = useState(false)
  const [humbergerAreaHeight, setHumbergerAreaHeight] = useState(0)
  const processing = useRef(false)
  const height = useWindowHeight()
  const wait1 = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(), 1);
    })
  const hambergerClick = async () => {
    // against click hits
    if (processing.current) return
    processing.current = true

    if (active) {
      for (let i = height; i > 0; i--) {
        if (i % 20 === 0) {
          await wait1()
        }
        setHumbergerAreaHeight(i - 1)
      }
    } else {
      for (let i = 0; i < height; i++) {
        if (i % 20 === 0) {
          await wait1()
        }
        setHumbergerAreaHeight(i + 1)
      }
    }
    setActive(!active)
    setTimeout(() => {
      processing.current = false;
    }, 300);
  }
  const humbergerAreaStyle = active || humbergerAreaHeight ? {
    display: 'block',
    height: humbergerAreaHeight,
  } : {
    display: 'none',
  }

  return (
    <div>
      <div css={ styles.logoArea }>
        <h1>Logo</h1>
      </div>
      <div css={ styles.humbergerSwitch } onClick={hambergerClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div css={ styles.humbergerArea } style={humbergerAreaStyle}>
        <div css={ styles.humbergerWrapper }>
          <div css={ styles.humbergerMenu }>
            <div css={ styles.humbergerBlock }>
              <ul>
                <li>
                  <span>1</span>
                </li>
                <li>
                  <span>2</span>
                </li>
                <li>
                  <span>3</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function useWindowHeight() {
  const [windowHeight, setWindowHeight] = useState(0)
  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight)
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return windowHeight
}

const styles = {
  logoArea: css`
    text-align: center;
    height: 82px;
  `,
  humbergerSwitch: css`
    width: 48px;
    height: 48px;
    top: 16px;
    right: 6px;
    z-index: 99;
    position: fixed;
    cursor: pointer;
    display: inline-block;
    span {
      background-color: #363636;
      position: absolute;
      right: 5px;
      width: 36px;
      height: 2px;
    }
    span:nth-of-type(1) {
      top: 12px;
    }
    span:nth-of-type(2) {
      top: 22px;
    }
    span:nth-of-type(3) {
      top: 32px;
    }
  `,
  humbergerArea: css`
    background-color: #000;
    position: fixed;
    width: 100%;
    right: 0;
  `,
  humbergerWrapper: css`
  `,
  humbergerMenu: css`
    width: 100%;
    height: calc(100vh - 82px);
    ul li span {
      color: #c0c0c0;
    }
  `,
}
