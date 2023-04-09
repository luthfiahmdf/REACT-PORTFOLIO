import React from "react";

function Footer() {
  return (
    <div>
      <div
        className="layout min-h-[5vh] bg-[#0D0D0D] justify-center flex items-center
        "
      >
        <div className="content text-white">
          <p
            style={{ fontFamily: "Inter", fontWeight: "400" }}
            className="lg:text-md text-sm"
          >
            Made With ❤ by Luthfiahmdf
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
