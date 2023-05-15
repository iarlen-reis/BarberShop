import { IAuthContext, IUser } from "../interfaces/AuthContext";
import { vi } from "vitest";

const mockUser: IUser = {
  uid: "123",
  email: "test@test.com",
  displayName: "Test User",
};

export const mockAuthContextValue: IAuthContext = {
  user: mockUser,
  error: "",
  setError: () => vi.fn(),
  logout: () => vi.fn(),
  useCreateUserWithEmail: () => vi.fn(),
  loginWithGoogle: () => vi.fn(),
  loginUserWithEmail: () => vi.fn(),
  DeleteUser: () => vi.fn(),
};
