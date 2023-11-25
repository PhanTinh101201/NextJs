import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* Footer Wave */}
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(114,137,218,0.7)" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(114,137,218,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(114,137,218,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#7289da" />
        </g>
      </svg>

      {/* Footer Content */}
      <footer className="page-footer font-small unique-color-dark pt-4">
        <div className="container">
          <ul className="list-unstyled list-inline text-center py-2">
            <h5 className="mb-1 font-bold">mm this button looks very good. do you want to click it?</h5>
            <li className="list-inline-item">
              <a href="#" className="btn btn-outline-light btn-rounded font-bold">yes!</a>
            </li>
            <br />
            <br />
          </ul>
        </div>
        <div className="footer-copyright text-center py-3 font-bold">
          <p>© 2020 Copyright: <a href="https://discord.gg/uRqH5UT">Croxy</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

