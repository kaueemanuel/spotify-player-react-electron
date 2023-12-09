// eslint-disable-next-line import/prefer-default-export
export const getTime = (duration: string | number = 0) => {
  const hours = Math.floor(+duration / (1000 * 60 * 60));
  const minutes = Math.floor(+duration / (1000 * 60)) % 60;
  const minutesFormated = minutes > 9 ? minutes : `0${minutes}`;
  const seconds = Math.floor(+duration / 1000) % 60;
  const secondsFormated = seconds > 9 ? seconds : `0${seconds}`;

  if (hours > 0) {
    return `${hours}:${minutesFormated}:${secondsFormated}`;
  }
  return `${minutes}:${secondsFormated}`;
};
