/* eslint-disable react/require-default-props */
import React from 'react';
import { Container, CustomSlider } from './time-bar.styles';

interface SliderProps {
  min?: number | string;
  max?: number | string;
  defaultValue: number | string;
  onChange?: any;
}

const TimeBar: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  defaultValue,
  onChange,
}) => {
  const handleOnMouseMove = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(+event.target.value);
    }
  };

  return (
    <Container>
      <CustomSlider
        min={min}
        max={max}
        value={+defaultValue}
        step={1}
        onChange={handleOnMouseMove}
      />
    </Container>
  );
};

export default TimeBar;
