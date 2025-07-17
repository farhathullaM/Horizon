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
import { useTestimonalActions } from "@/hooks/useTestimonalActions";
import { fetchTestimonials } from "@/services/admin/testimonials";
import AddTestimonial from "../Forms/AddTestimonial";

const TestimonialTable = () => {
  const [limit, setLimit] = useState(15);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { deleteError, deleting, remove } = useTestimonalActions();

  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["testimonials", limit, page, search],
    queryFn: () => fetchTestimonials(limit, page, search),
    staleTime: 5 * 1000 * 60,
    keepPreviousData: true,
  });

  const totalItems = data?.total || 0;
  const totalPages = Math.ceil(totalItems / limit);
  const testimonials = data?.testimonials || [];

  return (
    <>
      <SheetContainer
        triggerBtn={<AddButton text="Add Testimonial" />}
        title="Add Testimonial"
        children={<AddTestimonial />}
      />

      <Table className="max-sm:text-xs">
        <TableHeader>
          <TableRow className="sticky top-0 bg-gray-200">
            <TableHead>Username</TableHead>
            <TableHead>Review</TableHead>
            <TableHead>University Name</TableHead>
            <TableHead>Course Name</TableHead>
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
            <TableMessage message="Fetching testimonials List..." colSpan={4} />
          ) : testimonials.length === 0 ? (
            <TableMessage message="No Customer found" colSpan={4} />
          ) : (
            testimonials.map((testimonial) => {
              return (
                <TableRow key={testimonial._id}>
                  <TableCell>{testimonial.username}</TableCell>
                  <TableCell>{testimonial.review}</TableCell>
                  <TableCell>{testimonial.university}</TableCell>
                  <TableCell>{testimonial.course}</TableCell>
                  <TableCell>
                    {/* <SheetContainer
                      triggerBtn={<EditBtn />}
                      title={"Edit testimonialersity"}
                    /> */}

                    <DeleteBtn onClick={() => remove(testimonial._id)} />
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

export default TestimonialTable;
