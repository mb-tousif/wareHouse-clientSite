import React from 'react';

const Loading = () => {
    return (
      <div>
        <button type="button" className="bg-indigo-500 m-4 p-2 rounded" disabled>
          <svg className="animate-spin h-10 w-8 mr-3" viewBox="0 0 24 24"></svg>
          Processing...
        </button>
      </div>
    );
};

export default Loading;