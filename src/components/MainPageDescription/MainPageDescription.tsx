import React from 'react';

type DescProps = {
  desc: string;
};

const MainPageDescription = ({ desc }: DescProps) => {
  return (
    <div className="description">
      <div className="motto-wrap">
        <div className="heading-jumbo-small" id="main-description">
          <p>{desc}</p>
          <br />
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default MainPageDescription;
