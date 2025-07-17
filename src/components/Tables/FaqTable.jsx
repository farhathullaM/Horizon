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
import AddButton from "./elememts/AddButton";
import { useFaqActions } from "@/hooks/useFaqActions";
import { fetchFaqs } from "@/services/admin/faq";
import AddFaq from "../Forms/AddFaq";

const FaqTable = () => {
  const [limit, setLimit] = useState(15);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { deleteError, deleting, remove } = useFaqActions();

  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["faqs", limit, page, search],
    queryFn: () => fetchFaqs(limit, page, search),
    staleTime: 5 * 1000 * 60,
    keepPreviousData: true,
  });

  const totalItems = data?.total || 0;
  const totalPages = Math.ceil(totalItems / limit);
  const faqs = data?.faqs || [];

  return (
    <>
      <SheetContainer
        triggerBtn={<AddButton text="Add FAQ" />}
        title="Add Faq"
        children={<AddFaq />}
      />

      <Table className="max-sm:text-xs">
        <TableHeader>
          <TableRow className="sticky top-0 bg-gray-200">
            <TableHead>Question</TableHead>
            <TableHead>Answer</TableHead>
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
          ) : faqs.length === 0 ? (
            <TableMessage message="No Customer found" colSpan={4} />
          ) : (
            faqs.map((faq) => {
              return (
                <TableRow key={faq._id}>
                  <TableCell>{faq.question}</TableCell>
                  <TableCell>{faq.answer}</TableCell>
                  <TableCell>
                    {/* <SheetContainer
                      triggerBtn={<EditBtn />}
                      title={"Edit Faq"}
                    /> */}

                    <DeleteBtn onClick={() => remove(faq._id)} />
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

export default FaqTable;
