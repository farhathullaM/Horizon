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
import { useContactActions } from "@/hooks/useContactActions";
import { fetchContacts } from "@/services/admin/contacts";
import { useSuggestionActions } from "@/hooks/useSuggestionActions";
import { fetchSuggestions } from "@/services/admin/suggestion";

const SuggestionTable = () => {
  const [limit, setLimit] = useState(15);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { deleteError, deleting, remove } = useSuggestionActions();

  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["suggestions", limit, page, search],
    queryFn: () => fetchSuggestions(limit, page, search),
    staleTime: 5 * 1000 * 60,
    keepPreviousData: true,
  });

  console.log(data);
  const totalItems = data?.total || 0;
  const totalPages = Math.ceil(totalItems / limit);
  const suggestions = data?.suggestions || [];

  return (
    <>
      <Table className="max-sm:text-xs">
        <TableHeader>
          <TableRow className="sticky top-0 bg-gray-200">
            <TableHead>Name</TableHead>
            <TableHead>phone</TableHead>
            <TableHead>email</TableHead>
            <TableHead>Qualificaton</TableHead>
            <TableHead>Prefered Country</TableHead>
            <TableHead>Intrested Area</TableHead>
            <TableHead>Prefered Course</TableHead>
            <TableHead>Prefered Mode</TableHead>
            <TableHead>Budget</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-bg-secondary">
          {isError ? (
            <TableMessage
              message={error.message}
              colSpan={5}
              className={"text-red-500"}
            />
          ) : isLoading || isFetching ? (
            <TableMessage message="Fetching Suggestion List..." colSpan={5} />
          ) : suggestions.length === 0 ? (
            <TableMessage message="No suggestions found" colSpan={5} />
          ) : (
            suggestions.map((univ) => {
              return (
                <TableRow key={univ._id}>
                  <TableCell>{univ.name}</TableCell>
                  <TableCell>{univ.phone}</TableCell>
                  <TableCell>{univ.email}</TableCell>
                  <TableCell>{univ.qualification}</TableCell>
                  <TableCell>{univ.countryPreference}</TableCell>
                  <TableCell>{univ.interestedArea}</TableCell>
                  <TableCell>{univ.preferredCourse}</TableCell>
                  <TableCell>{univ.preferredMode}</TableCell>
                  <TableCell>{univ.budget}</TableCell>
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

export default SuggestionTable;
