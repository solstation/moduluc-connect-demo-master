import { useHttpClientService, usePrivateHttpService } from "../httpclient";

export interface SubscriptionPlanInterface {
  name: string;
}

export const useGetWallets = () => {
  const { data, error, isLoading, request } = usePrivateHttpService(
    {
      url: "/api/v1/user/wallets",
      method: "get",
    },
    true
  );
  return {
    wallets: data,
    getWalletErrors: error,
    getWaletIsLoading: isLoading,
    getWallet: request,
  };
};

export const usePostUserSubscriptionPlan = () => {
  const { data, error, isLoading, request } = usePrivateHttpService(
    {
      method: "post",
      url: "/api/v1/user/subscription-plan",
    },
    true
  );
  return {
    userSubscriptionPlan: data,
    postUserSubscriptionPlanError: error,
    postUserSubscriptionPlanIsLoading: isLoading,
    postUserSubscriptionPlanRequest: request,
  };
};

export const useGetSubscriptionPlans = () => {
  const { data, error, isLoading, request } = useHttpClientService(
    {
      url: "/api/v1/admin/subscription-plan",
      method: "get",
    },
    true
  );

  return {
    subscriptionPlans: data,
    subscriptionPlansError: error,
    subscriptionPlansIsloading: isLoading,
    getSubscriptionPlans: request,
  };
};

export const useUdpateUsername = () => {
  const { data, error, isLoading, request } = usePrivateHttpService(
    {
      url: "/api/v1/user/update-username",
      method: "patch",
    },
    true
  );
  return {
    user: data,
    updateUsernameError: error,
    updateUsernameIsLoading: isLoading,
    patchUpdateUsername: request,
  };
};

export const usePostUserWallet = () => {
  const { data, error, isLoading, request } = usePrivateHttpService(
    {
      url: "/api/v1/user/wallet",
      method: "post",
    },
    true
  );
  return {
    user: data,
    postUserWalletError: error,
    postUserWalletIsLoading: isLoading,
    postUserWallet: request,
  };
};
