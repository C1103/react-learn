import React, { Component } from 'react';
import Notes from './components/Notes';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
// .vue 三部分
// jsx 语法，
// mvvm render 支持以html格式来写UI
// 最小单元的react组件就是带有render方法的component类实现
class App extends Component {
  render() {
    return (
      <Notes/>
    );
  }
}

export default App;
