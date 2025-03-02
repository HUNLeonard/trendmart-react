import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  userId: string | null;
  setUserId: (id: string) => void;
}
export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      //its just a mockup, in the future I have to make this real
      userId: "user-01",
      setUserId: (id) => set({ userId: id }),
    }),
    { name: "userId" },
  ),
);
