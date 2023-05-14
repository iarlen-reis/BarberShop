export interface ISchedule {
  service: string;
  description: string;
  status: string;
  username: string;
  uid: string;
  id: string;
  createdAt: string;
  scheduledDate: string;
}

export interface IUserDocuments {
  loading: boolean;
  schedules: ISchedule[] | null;
}
