import { create } from "zustand";
import { User } from "../../common/types/User";

interface UserState {
  updateUser: (newValue: User) => void;
  user: null | User;
}

export const useUser = create<UserState>((set) => ({
  user: null,
  updateUser: (newUser: User) => set(() => ({ user: newUser })),
}));
