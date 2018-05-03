import _ from 'lodash';
import './style.css';
import printMe from './print';
function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var btn = document.createElement('button');
    btn.innerHTML = "click me"
    btn.onclick = printMe;
    element.appendChild(btn);
    
    return element;
}
  
document.body.appendChild(component());
//console.log('hello world');