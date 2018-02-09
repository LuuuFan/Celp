import React from 'react';

class BizMoreInfoHours extends React.Component {
  constructor(props){
    super(props);
    this.state = {className: 'closed-now'}
  }

  ComponentDidMount(){
    if (this.props.is_open) {
      this.setState({className: 'open-now'})
    }
  }

  render(){
    const {hours, is_open, today_hour} = this.props;
    const time = (str) => {
      if (str.slice(0, 2) > 12 ) {
        return `${str.slice(0, 2) - 12}:${str.slice(2)} pm`
      } else {
        return `${str.slice(0, 2)}:${str.slice(2)} am`
      }
    }

    const open_status = is_open ? "Open now" : "Closed now";
    const today = new Date().getDay();

    return (
      <div>
        <div className='today-open-info'>
          <i className="far fa-clock"></i>
          <div>
            {today_hour ? <p>Today {time(today_hour[0])} - {time(today_hour[1])}</p> : ""}
            <div className={this.state.className}>{open_status}</div>
          </div>
        </div>
        <h1>Hours</h1>
        <table className='biz-more-info-hours'>
          <tbody>
            <tr><th>Mon</th><td>{hours[1] ? `${time(hours[1].start)} - ${time(hours[1].end)}` : "Closed"}</td><td>{today === 1 ? <div className={this.state.className}>{open_status}</div> : ""}</td></tr>
            <tr><th>Tue</th><td>{hours[2] ? `${time(hours[2].start)} - ${time(hours[2].end)}` : "Closed"}</td><td>{today === 2 ? <div className={this.state.className}>{open_status}</div> : ""}</td></tr>
            <tr><th>Wed</th><td>{hours[3] ? `${time(hours[3].start)} - ${time(hours[3].end)}` : "Closed"}</td><td>{today === 3 ? <div className={this.state.className}>{open_status}</div> : ""}</td></tr>
            <tr><th>Thu</th><td>{hours[4] ? `${time(hours[4].start)} - ${time(hours[4].end)}` : "Closed"}</td><td>{today === 4 ? <div className={this.state.className}>{open_status}</div> : ""}</td></tr>
            <tr><th>Fri</th><td>{hours[5] ? `${time(hours[5].start)} - ${time(hours[5].end)}` : "Closed"}</td><td>{today === 5 ? <div className={this.state.className}>{open_status}</div> : ""}</td></tr>
            <tr><th>Sat</th><td>{hours[6] ? `${time(hours[6].start)} - ${time(hours[6].end)}` : "Closed"}</td><td>{today === 6 ? <div className={this.state.className}>{open_status}</div> : ""}</td></tr>
            <tr><th>Sun</th><td>{hours[0] ? `${time(hours[0].start)} - ${time(hours[0].end)}` : "Closed"}</td><td>{today === 0 ? <div className={this.state.className}>{open_status}</div> : ""}</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default BizMoreInfoHours;
