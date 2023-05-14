import { IModal } from "../interfaces/Modal";

export const toLocalDate = (data: IModal) => {
  data.scheduledDate = new Date(data.scheduledDate).toLocaleString();

  return data;
};
