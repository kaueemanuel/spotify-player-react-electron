import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const ContainerTab = styled.div`
  display: flex;
  align-items: top;
  justify-content: end;
  width: 100%;
  background-color: var(--bg-color);
  -webkit-app-region: drag;
`;

export const Content = styled.div`
  flex-grow: 1;
`;

export const Button = styled.button`
  color: var(--font-color);
  cursor: pointer;
  border: none;
  background-color: none;
  background: none;
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  -webkit-app-region: no-drag;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding: 8px 9px 4px 9px;
  transition: ease-in 0.1s;
  border-radius: 0px;

  &:hover {
    color: var(--font-color-accent);
    background: #d0011b;
  }
`;

export const MinimizeButton = styled(Button)`
  &:hover {
    background: none;
  }
`;
