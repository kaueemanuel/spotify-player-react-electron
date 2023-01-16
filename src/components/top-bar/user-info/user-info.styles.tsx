import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--bg-color-seconday);
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  gap: 0px;
  margin-left: 10px;
  align-items: center;
  height: 30px;
  border-radius: 15px;
  -webkit-app-region: no-drag;
`;

export const UserPhoto = styled.img`
  margin-left: 3px;
  padding-right: 6px;
  height: 26px;
  border-radius: 50%;
`;
