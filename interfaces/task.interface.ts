export interface ITasks {
  id?: number;
  userId: number;
  title: string;
  description: string;
  dueDate: Date;
  status: number;
  createdAt?: Date;
  updatedAt?: Date;
}
