import { useEffect, useState } from 'react';

import { AxiosError } from 'axios';
import { useAsyncFn } from 'react-use';

export interface useServicesDataProps {
  loading: boolean | undefined;
  error: false | AxiosError;
  value: any;
}

// eslint-disable-next-line no-unused-vars
export type AnyFunction = (...args: any[]) => any;

const useServices = (
  serviceFunc: AnyFunction,
  ...standardParams: any
): // eslint-disable-next-line no-unused-vars
[useServicesDataProps, (...args: any) => Promise<any>] => {
  const [paramsAux, setParamsAux] = useState(standardParams);

  useEffect(() => {
    if (JSON.stringify(standardParams) !== JSON.stringify(paramsAux)) {
      setParamsAux(standardParams);
    }
  }, [standardParams, paramsAux]);

  const [{ error = false, loading = undefined, value = null }, getData] =
    useAsyncFn(
      async (...otherParams: any) => {
        const { data } = await serviceFunc(...[...paramsAux, ...otherParams]);
        return data;
      },
      [paramsAux, serviceFunc]
    );

  return [{ loading, value, error: error as AxiosError }, getData];
};

export default useServices;
