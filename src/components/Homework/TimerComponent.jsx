import React, { Component } from "react";

class TimerComponent extends Component {
  state = { seconds: 0 };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prev) => ({ seconds: prev.seconds + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("⏹ Timer stopped, component unmounted");
  }

  render() {
    return <h4>Timer: {this.state.seconds}s</h4>;
  }
}

export default TimerComponent;

// 1)Ինչու է React-ում props-ը համարվում “read-only”?
// Props-ը React-ում “read-only” է, որովհետև կոմպոնենտը չի կարող փոփոխել ծնողից ստացած տվյալները։
// Այդ տվյալները գալիս են մի ուղղությամբ՝ վերևից ներքև ։

// 2)Ինչու է կարևոր մաքրել interval-ը կամ listener-ը componentWillUnmount-ում?
// Կարևոր է մաքրել interval-ը կամ listener-ը, քանի որ եթե կոմպոնենտը ջնջվի, 
// interval-ը շարունակում է աշխատել և առաջացնում է memory leak կամ performance խնդիրներ։

// 3)Ինչու է PureComponent-ը օգտակար performance-ի համար?
// PureComponent-ը համեմատում է նախորդ և նոր props/state-ը։
// Եթե դրանք չեն փոխվել՝ render չի անում, այսինքն խնայում է ։

// 4) Ինչ օգուտ է տալիս PropTypes-ը ծրագրի կայունությանը?
// PropTypes-ը օգնում է գտնել սխալներ՝ props-ի տեսակի ստուգմամբ։
// Օրինակ՝ եթե year-ը number չէ, React-ը console-ում զգուշացում կտա։


// 5) Ինչպե՞ս է Lazy Loading-ը նպաստում app-ի արագ բեռնմանը։
// Lazy Loading-ը օգնում է app-ի արագ բեռնմանը
//  բեռնելով միայն այն կոմպոնենտները, որոնք տվյալ պահին պետք են։
// Սա նվազեցնում է սկզբնական bundle-ի չափը։
