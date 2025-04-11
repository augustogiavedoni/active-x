import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export default function ExercisesTableSkeleton() {
  return (
    <div className="rounded-md border border-muted divide-y divide-muted-foreground/10">
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead key="name">Name</TableHead>
              <TableHead key="description">Description</TableHead>
              <TableHead key="video_url">Video URL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Skeleton className="h-4 w-32" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-48" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-52" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-8 w-8 inline-block" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="block md:hidden p-4 space-y-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-4 w-1/2" /> {/* Name */}
            <Skeleton className="h-4 w-3/4" /> {/* Description */}
            <Skeleton className="h-4 w-full" /> {/* URL */}
            <div className="flex justify-end">
              <Skeleton className="h-8 w-8" /> {/* Actions */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
