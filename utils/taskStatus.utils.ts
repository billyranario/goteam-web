import { useTasks } from '~/stores/task';

export function getStatus(statusCode: number): string {
  const tasks = useTasks();
  const { statuses } = tasks;
  return statuses[statusCode] || 'Unknown Status';
}
