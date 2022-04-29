import React from 'react';

const LogIn = () => {
    return (
      <div className="mx-auto my-auto">
        <h2 className="font-medium">Log In</h2>
        <form>
          <input type="text" name="name" id="" />
          <input type="email" name="email" id="" />
          <input type="submit" value="LogIn" />
        </form>
      </div>
    );
};

export default LogIn;