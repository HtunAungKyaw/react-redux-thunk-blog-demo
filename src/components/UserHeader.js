import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    /*const user = this.props.user.find((each) => each.id === this.props.userId);

    return <div className="header">{user?.name}</div>;*/

    return <div className="header">{this.props.user?.name}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.find((each) => each.id === ownProps.userId),
  };
};
export default connect(mapStateToProps, { fetchUser })(UserHeader);
