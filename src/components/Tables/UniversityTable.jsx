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
import { fetchUniversities } from "@/services/admin/university";
import SheetContainer from "../ui/SheetContainer";
import { EditBtn } from "../ui/EditBtn";
import { DeleteBtn } from "../ui/DeleteBtn";
import { useUniversityActions } from "@/hooks/useUniversityActions";

const UniversityTable = () => {
  const [limit, setLimit] = useState(15);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { deleteError, deleting, remove } = useUniversityActions();

  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["universities", limit, page, search],
    queryFn: () => fetchUniversities(limit, page, search),
    staleTime: 5 * 1000 * 60,
    keepPreviousData: true,
  });

  console.log(data);
  const totalItems = data?.total || 0;
  const totalPages = Math.ceil(totalItems / limit);
  const universities = data?.universities || [];

  return (
    <>
      <Table className="max-sm:text-xs">
        <TableHeader>
          <TableRow className="sticky top-0 bg-gray-200">
            <TableHead>University Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-bg-secondary">
          {isError ? (
            <TableMessage
              message={error.message}
              colSpan={4}
              className={"text-red-500"}
            />
          ) : isLoading || isFetching ? (
            <TableMessage message="Fetching universities List..." colSpan={4} />
          ) : universities.length === 0 ? (
            <TableMessage message="No Customer found" colSpan={4} />
          ) : (
            universities.map((univ) => {
              return (
                <TableRow key={univ._id}>
                  <TableCell>{univ.name}</TableCell>
                  <TableCell>{univ.description}</TableCell>
                  <TableCell>{univ.type}</TableCell>
                  <TableCell>
                    <SheetContainer
                      triggerBtn={<EditBtn />}
                      title={"Edit University"}
                    />

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

export default UniversityTable;
