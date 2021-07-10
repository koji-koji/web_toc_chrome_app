import React from 'react';
import ReactDOM from 'react-dom';
import { css, cx } from '@emotion/css'

import './contents.css';

const Main = () => {
  const headingNodes = document.querySelectorAll("h1, h2, h3, h4, h5, h6")

  const addLeftPaddingBySelector = (selector: HTMLElement) => {
    return getPaddingNumberBySelector(selector) * 15
  }

  const getPaddingNumberBySelector = (selector: HTMLElement) => {
    if (["h1", "h2", "h3", "h4", "h5", "h6", "H1", "H2", "H3", "H4", "H5", "H6",].includes(selector.tagName)) {
      const headingNumber = +selector.tagName.slice(-1);
      console.log(headingNumber)
      return headingNumber
    }
    return 7
  }

  const addTopPaddingBySelector = (selector: HTMLElement) => {
    if (["h1", "h2", "H1", "H2"].includes(selector.tagName)) {
      const headingNumber = +selector.tagName.slice(-1);
      return headingNumber * 5
    }
  }
  
  return <>
    {Array.prototype.map.call(headingNodes, (headingNode: HTMLElement) => {
      return <>
        <a onClick={() => {
          const rect = headingNode.getBoundingClientRect();
          const elemtop = rect.top + window.pageYOffset;
          document.documentElement.scrollTop = elemtop;
        }} className={css`
          display: block;
          padding-left: ${addLeftPaddingBySelector(headingNode)}px;
          padding-top: ${addTopPaddingBySelector(headingNode)}px;
          overflow: auto;
          resize:   both;
          white-space: nowrap;
        `}>
          <p className={css`
            overflow: auto;
            resize:   both;
            white-space: nowrap;
          `}>
            {headingNode.textContent}
          </p>
        </a>
      </>
    })}
  </>;  
};

const app = document.createElement('div');
app.id = 'my-extension-root';
document.body.prepend(app);
const body = document.getElementsByTagName("body")?.[0];
body.style.display = "flex"
ReactDOM.render(<Main />, app);