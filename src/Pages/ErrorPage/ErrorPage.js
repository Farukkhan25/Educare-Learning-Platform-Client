import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
      <>
        <div className="d-flex flex-col justify-content-center align-items-center">
          <h1>Ops! An Error Ocurred!</h1>
          <br />
          {error && (
            <div>
              <p className="text-danger">
                {error.statusText || error.message}
              </p>
              <p>{error.status}</p>
            </div>
          )}
        </div>
      </>
    );
};

export default ErrorPage;