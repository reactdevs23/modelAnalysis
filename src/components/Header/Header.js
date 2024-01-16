import React from "react";

const Header = ({ title }) => {
  return (
    <div className="bg-blue-1200 p-4 rounded-t-xl">
      <h4 className="text-black-1300 font-Poppins text-lg font-medium">
        {title}
      </h4>
    </div>
  );
};

export default Header;
