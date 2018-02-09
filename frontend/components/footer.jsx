import React from 'react';

const Footer = () => (
  <div className='footer'>
    <div className='footer-main'>
      <ul>
      <li>About
        <ul>
          <a href='https://github.com/LuuuFan/Celp'><li><i className="fab fa-github"></i>About Celp</li></a>
          <a href='/'><li><i className="fab fa-linkedin"></i>About Me</li></a>
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
            <a href='/'><li><i class="fas fa-language"></i>English</li></a>
          </ul>
        </li>
        <li>Countries
          <ul>
            <a href='/'><li><i class="fas fa-globe"></i>United States</li></a>
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
      Copyright &copy; 2018-2018 Celp Inc. <i className="fab fa-yelp"></i> and related marks are registered trademarks of Celp.
    </p>
  </div>
);

export default Footer
