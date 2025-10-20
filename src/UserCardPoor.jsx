import {PureComponent} from "react";

class UserCardPoor extends PureComponent {
    constructor(props) {
        super(props);
        this.state={}
    }
    
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}
export default UserCardPoor;
// Միայն props-ի փոփոխության դեպքում
// (only re-renders when props change)