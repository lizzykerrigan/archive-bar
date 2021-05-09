import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Description = styled.div`
  height: 100vh;
  background: ${theme.archiveGreen};
  color: #fff;
`;

export const Motto = styled.p`
  font-size: 44px;
  line-height: 68px;
  font-weight: 400;
  text-align: left;
  text-transform: none;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MottoWrap = styled.div`
  width: 80%;
  margin-right: auto;
  margin-bottom: 85px;
  margin-left: auto;
  text-align: center;
`;
