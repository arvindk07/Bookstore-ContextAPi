import React from "react";

const AppFooter = () => {
  return (
    <div className="d-flex bg-dark text-white text-center py-3 justify-content-center align-items-center">
      The BookStore &copy; {new Date().getFullYear()}
    </div>
  );
};

export default AppFooter;
