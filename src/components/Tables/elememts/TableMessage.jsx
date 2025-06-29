import { TableCell, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

const TableMessage = ({ message, colSpan, className }) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan}>
        <div className={cn('w-full py-2 text-center', className)}>
          {message}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TableMessage;
