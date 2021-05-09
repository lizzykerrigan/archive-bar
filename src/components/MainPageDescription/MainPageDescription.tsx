import { Description, Motto, MottoWrap } from './MainPageDescription.styled';

type DescProps = {
  desc: string;
};

const MainPageDescription = ({ desc }: DescProps) => (
  <Description>
    <MottoWrap>
      <Motto>{desc}</Motto>
    </MottoWrap>
  </Description>
);

export default MainPageDescription;
