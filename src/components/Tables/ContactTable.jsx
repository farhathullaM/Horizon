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

const ContactTable = () => {
  const [limit, setLimit] = useState(15);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { deleteError, deleting, remove } = useContactActions();

  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["contacts", limit, page, search],
    queryFn: () => fetchContacts(limit, page, search),
    staleTime: 5 * 1000 * 60,
    keepPreviousData: true,
  });

  console.log(data);
  const totalItems = data?.total || 0;
  const totalPages = Math.ceil(totalItems / limit);
  const contacts = data?.contacts || [];

  return (
    <>
      <Table className="max-sm:text-xs">
        <TableHeader>
          <TableRow className="sticky top-0 bg-gray-200">
            <TableHead>Name</TableHead>
            <TableHead>phone</TableHead>
            <TableHead>email</TableHead>
            <TableHead>message</TableHead>
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
            <TableMessage message="Fetching contacts List..." colSpan={5} />
          ) : contacts.length === 0 ? (
            <TableMessage message="No contacts found" colSpan={5} />
          ) : (
            contacts.map((univ) => {
              return (
                <TableRow key={univ._id}>
                  <TableCell>{univ.name}</TableCell>
                  <TableCell>{univ.phone}</TableCell>
                  <TableCell>{univ.email}</TableCell>
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

export default ContactTable;
