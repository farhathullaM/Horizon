import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import TableMessage from "./elememts/TableMessage";
import TableNav from "./elememts/TableNav";
import { DeleteBtn } from "../ui/DeleteBtn";
import { useApplicationActions } from "@/hooks/useApplicationActions";
import { fetchApplications } from "@/services/admin/applications";

const ApplicationTable = () => {
  const [limit, setLimit] = useState(15);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { deleteError, deleting, remove } = useApplicationActions();

  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["applications", limit, page, search],
    queryFn: () => fetchApplications(limit, page, search),
    staleTime: 5 * 1000 * 60,
    keepPreviousData: true,
  });

  const totalItems = data?.total || 0;
  const totalPages = Math.ceil(totalItems / limit);
  const applications = data?.applications || [];

  return (
    <>
      <Table className="max-sm:text-xs">
        <TableHeader>
          <TableRow className="sticky top-0 bg-gray-200">
            <TableHead> Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-bg-secondary">
          {isError ? (
            <TableMessage
              message={error.message}
              colSpan={6}
              className={"text-red-500"}
            />
          ) : isLoading || isFetching ? (
            <TableMessage message="Fetching applications List..." colSpan={6} />
          ) : applications.length === 0 ? (
            <TableMessage message="No Applications found" colSpan={6} />
          ) : (
            applications.map((univ) => {
              return (
                <TableRow key={univ._id}>
                  <TableCell>{univ.name}</TableCell>
                  <TableCell>{univ.email}</TableCell>
                  <TableCell>{univ.phone}</TableCell>
                  <TableCell>{univ.course}</TableCell>
                  <TableCell>{univ.message}</TableCell>
                  <TableCell>
                    <DeleteBtn onClick={() => remove(univ._id)} />
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>

      <TableNav
        currentPage={page}
        setCurrentPage={setPage}
        totalItems={totalItems}
        itemsPerPage={limit}
        totalPages={totalPages}
      />
    </>
  );
};

export default ApplicationTable;
