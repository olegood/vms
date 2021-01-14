import React from 'react';
import {Link} from 'react-router-dom';

function ErrorComponent() {
  return (
    <div>
      <div className="alert alert-warning" role="alert">
        Unknown page.
      </div>
      <div className="header">
        <h5>Ooops...</h5>
      </div>
      <p className="text-justify">
        The page you requested is unknown. Please contact system administrator.
      </p>
      <p className="text-justify">
        Navigate back to <Link to="/welcome">Welcome</Link>.
      </p>
    </div>
  );
}

export default ErrorComponent;
