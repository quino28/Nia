import { useState } from "react";
import { css } from '@emotion/react'

export const Header = () => {
  const [ active, setActive ] = useState(false)
  const hambergerClick = () => {
    setActive(!active)
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
      <div css={ styles.humbergerArea } style={{ display: active ? 'block' : 'none' }}>
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
    transition: all 0.3s ease;
    background-color: #000;
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
  `,
  humbergerWrapper: css`
    margin-top: 82px;
  `,
  humbergerMenu: css`
    width: 100%;
    height: calc(100vh - 82px);
    ul li span {
      color: #c0c0c0;
    }
  `,
}
