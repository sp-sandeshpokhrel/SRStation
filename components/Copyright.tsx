import React from "react";

const CopyrightSection: React.FC = () => {
  return (
    <div className="bottom-0">
      <div className="bg-gray-200 w-full py-4 ">
        <div className="container mx-auto px-4">
          {/* Large Screen */}
          <div className="hidden lg:flex lg:justify-end ">
            <p className="text-gray-700">
              © 2023 Your Website. All rights reserved.
            </p>
          </div>

          {/* Medium and Small Screen */}
          <div className="lg:hidden text-center">
            <p className="text-gray-700">
              © 2023 Your Website. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightSection;
