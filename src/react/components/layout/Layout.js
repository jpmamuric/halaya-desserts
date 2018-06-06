import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

import * as actions from '../../../redux/actions/action-layout';

class Layout extends Component {
  render() {
    const { sidebar, toggleSidebar } = this.props;
    return (
      <div>
        <Header sidebar={sidebar}  toggleSidebar={toggleSidebar} />
        <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
        <main >
          { this.props.children }
        </main>
      </div>
    )
  }

}

const mapStateToProps = ({ layout }) => ({ sidebar: layout.sidebar });

export default connect(mapStateToProps, actions)(Layout);



// state = {
//   showSidedrawer: false
// }
//
// handleSidedrawerClose = () => {
//   this.setState({ showSidedrawer : false })
// }
//
// handleSidedrawerToggle = () => {
//   this.setState((prevState) => {
//     return { showSidedrawer : !prevState.showSidedrawer }
//   });
// }
