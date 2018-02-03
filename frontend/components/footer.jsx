import React from 'react';

const Footer = () => (
  <div className='footer'>
    <div className='footer-main'>
      <ul>
      <li>About
        <ul>
          <a href='/'><li>About Celp</li></a>
          <a href='/'><li>About Me</li></a>
        </ul>
      </li>
      <li>Discover
        <ul>
          <a href='/'><li>The Local Celp</li></a>
          <a href='/'><li>Celp Blog</li></a>
          <a href='/'><li>Support</li></a>
        </ul>
      </li>
      <li>Celp for Business Owner</li>
      <div>
        <li>Languages
          <ul>
            <a href='/'><li>English</li></a>
          </ul>
        </li>
        <li>Countries
          <ul>
            <a href='/'><li>United States</li></a>
          </ul>
        </li>
      </div>
    </ul>
    </div>
    <div className='footer-background-container'>
      <div className='footer-background'>
        <img src='http://res.cloudinary.com/ddwejrtgh/image/upload/v1517535496/celp/city_line_nypobt.png' />
      </div>
    </div>
    <p>
      Copyright &copy; 2018-2018 Celp Inc. <i className="fab fa-yelp"></i> and related marks are registered trademarks of Yelp.
    </p>
  </div>
);

export default Footer
