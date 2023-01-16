import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  justify-content: center;
  align-items: center;
  height: calc(100% - 20px);
`;

export const Img = styled.img`
  height: 80px;
`;
export const Button = styled.a`
  width: 218px;
  border-radius: 26px;
  font-size: 12px;
  text-decoration: none;
  background-color: var(--font-color-accent);
  text-align: center;
  padding: 10px 16px;

  &:hover {
    opacity: 0.9;
  }
`;
