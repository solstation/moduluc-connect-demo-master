import { usePrivateHttpService } from "../httpclient";
import { ProfileData } from "../interfaces/profile.interface";

interface UserProfileInterface {
  profile: any;
  isLoading: boolean;
  errors: Array<any>;
  updateProfile: (profileData: ProfileData) => void;
}

export const useUpdateProfile = (): UserProfileInterface => {
  const { data, error, isLoading, request } = usePrivateHttpService<
    any,
    any,
    ProfileData
  >(
    {
      url: "/api/v1/user/update-profile",
      method: "patch",
    },
    true
  );
  return {
    profile: data,
    isLoading,
    errors: error,
    updateProfile: request,
  };
};
