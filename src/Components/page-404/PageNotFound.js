import React from 'react';
import Page from './page-404.png'
const PageNotFound = () => {
    return (
      <div>
        <div className="w-full mt-10">
          <img className="mx-auto my-auto shadow-2xl rounded-xl" src={Page} alt="Page not found" />
        </div>
        <div className="ml-10 mt-8 text-center text-zinc-700">
          <h2 className="text-3xl bolder font-extrabold">
            404-PAGE NOT FOUND!
          </h2>
          <h2 className="font-bold">
            The page you are looking for might have been removed or temporarily
            unavailable.
          </h2>
        </div>
      </div>
    );
};

export default PageNotFound;