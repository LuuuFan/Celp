import React from 'react';

const BizMoreInfoHours = ({hours}) => {
  const time = (str) => {
    if (str.slice(0, 2) > 12 ) {
      return `${str.slice(0, 2) - 12}:${str.slice(2)} pm`
    } else {
      return `${str.slice(0, 2)}:${str.slice(2)} am`
    }
  }

  return (
    <table className='biz-more-info-hours'>
      <tr><th>Mon</th><td>{hours[1] ? `${time(hours[1].start)} - ${time(hours[1].end)}` : "Closed"}</td><td></td></tr>
      <tr><th>Tue</th><td>{hours[2] ? `${time(hours[2].start)} - ${time(hours[2].end)}` : "Closed"}</td><td></td></tr>
      <tr><th>Wed</th><td>{hours[3] ? `${time(hours[3].start)} - ${time(hours[3].end)}` : "Closed"}</td><td></td></tr>
      <tr><th>Thu</th><td>{hours[4] ? `${time(hours[4].start)} - ${time(hours[4].end)}` : "Closed"}</td><td></td></tr>
      <tr><th>Fri</th><td>{hours[5] ? `${time(hours[5].start)} - ${time(hours[5].end)}` : "Closed"}</td><td></td></tr>
      <tr><th>Sat</th><td>{hours[6] ? `${time(hours[6].start)} - ${time(hours[6].end)}` : "Closed"}</td><td></td></tr>
      <tr><th>Sun</th><td>{hours[0] ? `${time(hours[0].start)} - ${time(hours[0].end)}` : "Closed"}</td><td></td></tr>
    </table>
  );

}
export default BizMoreInfoHours;
