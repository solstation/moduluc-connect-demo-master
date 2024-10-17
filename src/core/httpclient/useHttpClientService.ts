import { AxiosRequestConfig } from "axios";
import React from "react";
import { httpClient } from "./httpClient";

export const useHttpClientService = <D = any, E = any, T = any>(
  params: AxiosRequestConfig,
  onDemand: boolean = false
) => {
  const [data, setData] = React.useState<D | null>(null);
  const [error, setError] = React.useState<E | null>(null);
  const [isLoading, setIsLoading] = React.useState(!onDemand);

  const request = React.useCallback(
    (body: T = params.data, url = params.url) => {
      if (onDemand) {
        setIsLoading(true);
      }
      params.data = { ...params.data, ...body };
      params.url = url;

      httpClient
        .request<D>(params)
        .then((response: any) => {
          setData(response.data);
          setError(null);
          setIsLoading(false);
        })
        .catch((error: E) => {
          setData(null);
          setIsLoading(false);
          setError(error);
        });
    },
    [params, onDemand]
  );

  React.useEffect(() => {
    if (!onDemand) {
      request();
    }
  }, [onDemand, request]);
  return {
    data,
    error,
    isLoading,
    request,
  };
};
