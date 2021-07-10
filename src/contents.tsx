import React from 'react';
import ReactDOM from 'react-dom';

import './contents.css';

const Main = () => {
  const headingNodes = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
  Array.prototype.map.call(headingNodes, (headingNode: Node) => headingNode)

  return <div>
    {Array.prototype.map.call(headingNodes, (headingNode: Node) => {
      return headingNode.textContent
    })}
  </div>;  
};

const app = document.createElement('div');
app.id = 'my-extension-root';
document.body.prepend(app);
const body = document.getElementsByTagName("body")?.[0];
body.style.display = "flex"
ReactDOM.render(<Main />, app);