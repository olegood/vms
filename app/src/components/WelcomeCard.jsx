import React from 'react';

function WelcomeCard() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Welcome,</h5>
          <p className="card-text">
            You can start you work by pressing login button.
          </p>
          <a href="/login" className="btn btn-primary">Login</a>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCard;
