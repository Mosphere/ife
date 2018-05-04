// import _ from 'lodash';
// import './style.css';

// function component() {
//     var element = document.createElement('div');
  
//     // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');

//     var btn = document.createElement('button');
//     return element;
// }
  
// document.body.appendChild(component());
//console.log('hello world');

import san from 'san';
import {router} from 'san-router';
import San from './app.san';

console.log('hello webpack  San');

//这是控制路由，引入San组件  不要问我怎么知道，看官方demo学来的。这个东西坑了我好久
router.add({rule: '/', Component: San, target: '#app'});

// 一定要记得启动
router.start();