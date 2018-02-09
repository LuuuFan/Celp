import React from 'react';

class BizMoreInfoHours extends React.Component {
  constructor(props){
    super(props);
    this.state = {className: 'closed-now', openStatus: 'Closed now'}
  }

  ComponentDidMount(){
    if (this.props.isOpen) {
      this.setState({className: 'open-now', openStatus: 'Open now'})
    }
  }

  componentWillReceiveProps(newProps){
    if (newProps.isOpen) {
      this.setState({className: 'open-now', openStatus: 'Open now'})
    }
  }

  render(){
    const {hours, todayHour} = this.props;
    const time = (str) => {
      if (str.slice(0, 2) > 12 ) {
        return `${str.slice(0, 2) - 12}:${str.slice(2)} pm`
      } else {
        return `${str.slice(0, 2)}:${str.slice(2)} am`
      }
    }

    const today = new Date().getDay();

    return (
      <div>
        <div className='today-open-info'>
          <i className="far fa-clock"></i>
          <div>
            {todayHour ? <p>Today {time(todayHour[0])} - {time(todayHour[1])}</p> : ""}
            <div className={this.state.className}>{this.state.openStatus}</div>
          </div>
        </div>
        <h1>Hours</h1>
        <table className='biz-more-info-hours'>
          <tbody>
            <tr><th>Mon</th><td>{hours[1] ? `${time(hours[1].start)} - ${time(hours[1].end)}` : "Closed"}</td><td>{today === 1 ? <div className={this.state.className}>{this.state.openStatus}</div> : ""}</td></tr>
            <tr><th>Tue</th><td>{hours[2] ? `${time(hours[2].start)} - ${time(hours[2].end)}` : "Closed"}</td><td>{today === 2 ? <div className={this.state.className}>{this.state.openStatus}</div> : ""}</td></tr>
            <tr><th>Wed</th><td>{hours[3] ? `${time(hours[3].start)} - ${time(hours[3].end)}` : "Closed"}</td><td>{today === 3 ? <div className={this.state.className}>{this.state.openStatus}</div> : ""}</td></tr>
            <tr><th>Thu</th><td>{hours[4] ? `${time(hours[4].start)} - ${time(hours[4].end)}` : "Closed"}</td><td>{today === 4 ? <div className={this.state.className}>{this.state.openStatus}</div> : ""}</td></tr>
            <tr><th>Fri</th><td>{hours[5] ? `${time(hours[5].start)} - ${time(hours[5].end)}` : "Closed"}</td><td>{today === 5 ? <div className={this.state.className}>{this.state.openStatus}</div> : ""}</td></tr>
            <tr><th>Sat</th><td>{hours[6] ? `${time(hours[6].start)} - ${time(hours[6].end)}` : "Closed"}</td><td>{today === 6 ? <div className={this.state.className}>{this.state.openStatus}</div> : ""}</td></tr>
            <tr><th>Sun</th><td>{hours[0] ? `${time(hours[0].start)} - ${time(hours[0].end)}` : "Closed"}</td><td>{today === 0 ? <div className={this.state.className}>{this.state.openStatus}</div> : ""}</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default BizMoreInfoHours;
