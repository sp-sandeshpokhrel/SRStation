import React from "react";

const image =
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80";

const About: React.FC = () => {
  return (
    <div className="flex flex-wrap md:ml-8 md:mr-8">
      {/* Large Screen */}
      <div className="hidden lg:block w-1/2">
        <img
          className="w-full h-auto object-cover"
          src={image}
          alt="About Image"
        />
      </div>
      <div className="w-full lg:w-1/2 bg-gray-100 p-4 hidden lg:block">
        <h2 className="text-2xl text-center mt-16 font-bold mb-4">
          About Topic
        </h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          euismod ex ac dolor tristique, at sagittis mauris tincidunt. Nulla ac
          lacus eu eros cursus condimentum.
        </p>
      </div>

      {/* Medium and Small Screen */}
      <div className="w-full md:w-2/3 lg:hidden">
        <div className="mb-4">
          <img
            className="w-full h-auto object-cover"
            src={image}
            alt="About Image"
          />
        </div>
        <div className="bg-gray-100 p-4">
          <h2 className="text-2xl font-bold mb-4">About Topic</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            euismod ex ac dolor tristique, at sagittis mauris tincidunt. Nulla
            ac lacus eu eros cursus condimentum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
