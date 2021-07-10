import React from 'react';
import ReactDOM from 'react-dom';
import { css, cx } from '@emotion/css'

import './contents.css';

const Main = () => {
  const headingNodes = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
  
  return <div>
    {Array.prototype.map.call(headingNodes, (headingNode: HTMLElement) => {
      return <>
        <a onClick={() => {
          const rect = headingNode.getBoundingClientRect();
          const elemtop = rect.top + window.pageYOffset;
          document.documentElement.scrollTop = elemtop;
        }} className={css`
          display: block;
        `}>
          {headingNode.textContent}
        </a>
      </>
    })}
  </div>;  
};

const app = document.createElement('div');
app.id = 'my-extension-root';
document.body.prepend(app);
const body = document.getElementsByTagName("body")?.[0];
body.style.display = "flex"
ReactDOM.render(<Main />, app);