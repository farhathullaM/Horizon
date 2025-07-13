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
import SheetContainer from "../ui/SheetContainer";
import { EditBtn } from "../ui/EditBtn";
import { DeleteBtn } from "../ui/DeleteBtn";
import AddButton from "./elememts/AddButton";
import AddUniversity from "../Forms/AddUniversity";
import { fetchCourses } from "@/services/admin/courses";
import { useCourseActions } from "@/hooks/useCourseActions";

const CourseTable = () => {
  const [limit, setLimit] = useState(15);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { deleteError, deleting, remove } = useCourseActions();

  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["courses", limit, page, search],
    queryFn: () => fetchCourses(limit, page, search),
    staleTime: 5 * 1000 * 60,
    keepPreviousData: true,
  });

  console.log(data);
  const totalItems = data?.total || 0;
  const totalPages = Math.ceil(totalItems / limit);
  const universities = data?.courses || [];

  return (
    <>
      <SheetContainer
        triggerBtn={<AddButton text="Add Course" />}
        title="Add Course"
        children={<AddUniversity />}
      />

      <Table className="max-sm:text-xs">
        <TableHeader>
          <TableRow className="sticky top-0 bg-gray-200">
            <TableHead>Course Name</TableHead>
            <TableHead>University</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Mode</TableHead>
            <TableHead>Fees</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-bg-secondary">
          {isError ? (
            <TableMessage
              message={error.message}
              colSpan={7}
              className={"text-red-500"}
            />
          ) : isLoading || isFetching ? (
            <TableMessage message="Fetching Course List..." colSpan={7} />
          ) : universities.length === 0 ? (
            <TableMessage message="No Course found" colSpan={7} />
          ) : (
            universities.map((univ) => {
              return (
                <TableRow key={univ._id}>
                  <TableCell>{univ.name}</TableCell>
                  <TableCell>{univ.university_id?.name}</TableCell>
                  <TableCell>{univ.description}</TableCell>
                  <TableCell>{univ.mode}</TableCell>
                  <TableCell>{univ.fees}</TableCell>
                  <TableCell>{univ.duration}</TableCell>
                  <TableCell>
                    <SheetContainer
                      triggerBtn={<EditBtn />}
                      title={"Edit Course"}
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

export default CourseTable;
