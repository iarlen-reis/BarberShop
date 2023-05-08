interface IFormData {
  service: string;
  description: string;
  scheduledDate: string;
}

export const toLocalDate = (data: IFormData) => {
  data.scheduledDate = new Date(data.scheduledDate).toLocaleString();

  return data;
};
