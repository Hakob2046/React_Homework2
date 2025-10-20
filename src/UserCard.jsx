import { Component } from "react";

class UserCard extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
  render() {
    return (
      <div>
        {this.props.hhname}
        {this.props.age}
        {this.props.adreess}
      </div>
    );
  }
}
export default UserCard;
// Միայն props-ի փոփոխության դեպքում
// (only re-renders when props change)
