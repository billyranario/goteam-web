import { format } from 'date-fns';

export function formatDate(dateString: Date): string {
  return format(new Date(dateString), 'MMMM d, yyyy');
}
