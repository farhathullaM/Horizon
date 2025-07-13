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
import { useBlogActions } from "@/hooks/useBlogActions";
import { fetchBlogs } from "@/services/admin/blogs";
import AddBlog from "../Forms/AddBlog";

const BlogTable = () => {
  const [limit, setLimit] = useState(15);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { deleteError, deleting, remove } = useBlogActions();

  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["blogs", limit, page, search],
    queryFn: () => fetchBlogs(limit, page, search),
    staleTime: 5 * 1000 * 60,
    keepPreviousData: true,
  });

  console.log(data);
  const totalItems = data?.total || 0;
  const totalPages = Math.ceil(totalItems / limit);
  const blogs = data?.blogs || [];

  return (
    <>
      <SheetContainer
        triggerBtn={<AddButton text="Add Blog" />}
        title="Add Blog"
        children={<AddBlog />}
      />

      <Table className="max-sm:text-xs">
        <TableHeader>
          <TableRow className="sticky top-0 bg-gray-200">
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Author</TableHead>
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
            <TableMessage message="Fetching blogs List..." colSpan={4} />
          ) : blogs.length === 0 ? (
            <TableMessage message="No Blog found" colSpan={4} />
          ) : (
            blogs.map((testimonial) => {
              return (
                <TableRow key={testimonial._id}>
                  <TableCell>{testimonial.title}</TableCell>
                  <TableCell>{testimonial.description}</TableCell>
                  <TableCell>{testimonial.author}</TableCell>
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

export default BlogTable;
