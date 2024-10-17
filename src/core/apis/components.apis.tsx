import { useHttpClientService, usePrivateHttpService } from "../httpclient";

export const USER_COMPONENT_URL = "/api/v1/user/components";

export const useGetAllComponents = () => {
  const { data, error, isLoading, request } = useHttpClientService(
    {
      url: `${USER_COMPONENT_URL}`,
      method: "get",
    },
    true
  );
  return {
    components: data,
    getAllComponentsError: error,
    getAllComponentsIsLoading: isLoading,
    getAllComponents: request,
  };
};

export const useGetUserComponents = () => {
  const { data, error, isLoading, request } = usePrivateHttpService(
    {
      url: `${USER_COMPONENT_URL}/user`,
      method: "get",
    },
    true
  );
  return {
    userComponents: data,
    getUserComponentsError: error,
    getUserComponentsIsLoading: isLoading,
    getUserComponents: request,
  };
};

export const usePatchUserComponent = () => {
  const { data, error, isLoading, request } = usePrivateHttpService(
    {
      url: `${USER_COMPONENT_URL}/{id}`,
      method: "patch",
    },
    true
  );
  return {
    component: data,
    patchUserComponentError: error,
    patchUserComponentIsLoading: isLoading,
    patchUserComponent: request,
  };
};
