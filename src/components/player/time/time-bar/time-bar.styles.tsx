import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 18px;
  position: relative;
  margin-top: 1px;
`;

export const CustomSlider = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;

  &::-webkit-slider-runnable-track {
    background: ${(props) => `linear-gradient(
      to right,
      var(--font-color-accent) ${props.value}%,
      var(--bg-color-secondary) ${props.value}%
    )`};
    height: 5px;
    border-radius: 5px;
  }

  /******** Firefox ********/
  &::-moz-range-track {
    background: ${(props) => `linear-gradient(
      to right,
      var(--font-color-accent) ${props.value}%,
      var(--bg-color-secondary) ${props.value}%
    )`};
    height: 5px;
    border-radius: 5px;
  }

  &::-webkit-slider-thumb {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -webkit-appearance: none;
    width: 3px;
    height: 15px;
    background: var(--font-color-accent);
    margin-top: -5px;
    border-radius: 1px;
    cursor: pointer;
  }
`;
