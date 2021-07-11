import React from 'react';
import ReactDOM from 'react-dom';
import { css, cx } from '@emotion/css'

import './contents.css';

const Main = () => {
  // TODO: ロジックをサイドメニューのコンポーネントから分離。
  // リンク先でもh1~h6を取得するので、複数回or再起的に使えるようにする。
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
          const elementTop = rect.top + window.pageYOffset;
          // TODO: 暫定コードの削除。スクロール時にheaderがあることを考慮して固定値を入れている。
          // headerがあるかを判断して、動的にマージンを設定するように調整したい。
          const headerMargin = 100
          document.documentElement.scrollTop = elementTop - headerMargin;
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

// TODO: リファクタリング。styleで書かない方法や、理解をしやすい形に調整する。
const app = document.createElement('div');
app.id = 'my-extension-root';
app.style.position = "sticky"
app.style.height = "100vh"
app.style.width = "400px"
app.style.minWidth = "300px";
app.style.top = "0"
app.style.overflow = "scroll"

// 拡張機能をサイドに表示
const body = document.getElementsByTagName("body")?.[0] as HTMLElement ;
const bodyCopy = body.cloneNode(true) as HTMLElement
const addBody = "<div>" + bodyCopy.innerHTML + "</div>" 

body.innerHTML = addBody;
body.style.display = "flex"
body.prepend(app);

ReactDOM.render(<Main />, app);