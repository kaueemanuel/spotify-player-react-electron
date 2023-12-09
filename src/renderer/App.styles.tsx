import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

interface ContainerRoutesProps {
  background: string;
}
export const ContainerRoutes = styled.div<ContainerRoutesProps>`
  flex-grow: 1;
  position: relative;
  background-image: ${(props) => `url("${props.background}")`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
