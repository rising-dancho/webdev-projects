import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {currentYear} adfinem</p>
    </footer>
  );
}

export default Footer;
