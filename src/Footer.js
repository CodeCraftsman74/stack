import React from 'react';

const Footer = () => {
  const year = new Date();
  const footerStyle = {
    backgroundColor: 'orange',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
  };

  return (
    <footer style={footerStyle}>
      <p>Copyright &copy; {year.getFullYear()}</p>
    </footer>
  );
};

export default Footer;