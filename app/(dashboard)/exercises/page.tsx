import { SiteHeader } from "@/components/dashboard/site-header";
import { ExercisesTable } from "../../../components/exercises/table";
import { CirclePlusIcon } from "lucide-react";
import { Pagination } from "@/components/ui/pagination";
import { Suspense } from "react";
import ExercisesTableSkeleton from "@/components/exercises/skeleton";
import Search from "@/components/ui/search";

async function getTotalPages(): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return 2;
}

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await getTotalPages();

  return (
    <div>
      <SiteHeader
        title={"Exercises"}
        button={{
          url: "dashboard/exercises/add",
          text: "Add exercise",
          icon: CirclePlusIcon,
        }}
      />
      <div className="px-5 py-4">
        <Search placeholder="Search exercises..." />
      </div>
      <div className="px-5 py-2">
        <Suspense
          key={query + currentPage}
          fallback={<ExercisesTableSkeleton />}
        >
          <ExercisesTable query={query} currentPage={currentPage} />
        </Suspense>
      </div>
      <div className="px-5 py-2">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
