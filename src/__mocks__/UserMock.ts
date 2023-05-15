import { IAuthContext, IUser } from "../interfaces/AuthContext";
import { vi } from "vitest";

const mockUser: IUser = {
  uid: "123",
  email: "test@test.com",
  displayName: "Test User",
  photoURL: "",
};

export const mockAuthContextValue: IAuthContext = {
  user: mockUser,
  error: "",
  setError: () => vi.fn(),
  logout: () => vi.fn(),
  useCreateUserWithEmail: () => vi.fn(),
  loginWithGoogle: vi.fn().mockResolvedValue(Promise.resolve()),
  loginUserWithEmail: () => vi.fn(),
  DeleteUser: () => vi.fn(),
};
