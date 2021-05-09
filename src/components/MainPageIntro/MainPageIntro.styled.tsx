import styled from 'styled-components';

type Props = {
  imageUrl: string;
};

export const IntroHead = styled.div`
  background-color: #f4f4f4;
  background-image: url(${({ imageUrl }: Props) => imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  transition: opacity 1s ease;
  height: 100vh;
  background-position: 50% 50%;
  opacity: 1;
  color: #fff;
`;

export const IntroLogo = styled.img`
  width: 100vw;
  height: auto;

  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  @media screen and (orientation: landscape) {
    width: 65vw;
    height: auto;
    top: 10%;
  }
`;
