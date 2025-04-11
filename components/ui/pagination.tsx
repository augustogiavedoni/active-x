"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex justify-end">
      <div className="flex items-center justify-between">
        <div className="flex w-fit items-center justify-center text-sm font-medium mr-4">
          Page {currentPage} of {totalPages}
        </div>
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Button
            asChild
            variant="outline"
            size="icon"
            className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
          >
            <Link href={createPageURL(1)}>
              <ChevronsLeftIcon />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
          >
            <Link href={createPageURL(currentPage - 1)}>
              <ChevronLeftIcon />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
          >
            <Link href={createPageURL(currentPage + 1)}>
              <ChevronRightIcon />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
          >
            <Link href={createPageURL(totalPages)}>
              <ChevronsRightIcon />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
