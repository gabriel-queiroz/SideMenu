import React, { Component } from 'react';
import './styles';
import Container from './styles/container';
import SideMenu from './components/SideMenu';
import Content from './components/Content';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Container>
          <SideMenu />
          <Content>
          </Content>
        </Container>
      </Provider>
    );
  }
}
export default App;
