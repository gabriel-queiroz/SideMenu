import React, { Component } from 'react'
import { connect } from 'react-redux';
import { SideMenuContainer } from './styles';

class SideMenu extends Component {

  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <SideMenuContainer open={this.props.menu} >
      </SideMenuContainer>
    );
  }

}

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(mapStateToProps)(SideMenu);