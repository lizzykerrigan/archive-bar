import React from 'react';

type DescProps = {
  desc: string;
};

const MainPageDescription = ({ desc }: DescProps) => {
  return (
    <div className="bg-archive-500 text-archive-100 h-screen">
      <div
        className="h-screen mx-auto w-3/4 flex justify-center text-left items-center leading-10 sm:leading-12 text-3xl sm:text-5xl"
        id="main-description"
      >
        <p>{desc}</p>
        <br />
      </div>
    </div>
  );
};

export default MainPageDescription;
