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
import { getAllUsers } from "@/services/superAdmin/user";
import { userUserActions } from "@/hooks/useUserActions";

const UserTable = () => {
  const [limit, setLimit] = useState(15);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { deleteError, deleting, remove, makeAdmin, makeUser } =
    userUserActions();

  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["userList", limit, page, search],
    queryFn: () => getAllUsers(page, limit, search),
    staleTime: 5 * 1000 * 60,
    keepPreviousData: true,
  });

  const totalItems = data?.total - 1 || 0;
  const totalPages = Math.ceil(totalItems / limit);
  const users = data?.users || [];

  return (
    <>
      <Table className="max-sm:text-xs">
        <TableHeader>
          <TableRow className="sticky top-0 bg-gray-200">
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
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
            <TableMessage message="Fetching user List..." colSpan={5} />
          ) : users.length === 0 ? (
            <TableMessage message="No users found" colSpan={5} />
          ) : (
            users
              .filter((user) => user.role !== "super_admin")
              .map((user) => {
                return (
                  <TableRow key={user._id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell className={"flex gap-2"}>
                      <DeleteBtn onClick={() => remove(user._id)} />
                      {user.role === "user" ? (
                        <div
                          className="bg-[#1E4765] cursor-pointer rounded-md text-white px-2 py-1"
                          onClick={() => makeAdmin(user._id)}
                        >
                          Make Admin
                        </div>
                      ) : (
                        <div
                          className="bg-[#1E4765] cursor-pointer rounded-md text-white px-2 py-1"
                          onClick={() => makeUser(user._id)}
                        >
                          Make User
                        </div>
                      )}
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

export default UserTable;
