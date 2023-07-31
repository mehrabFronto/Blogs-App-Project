import { routerPush } from "@/utils/routerPush";
import { Pagination } from "@mui/material";
import { useRouter } from "next/router";

const PaginationComponent = ({ page, totalPages }) => {
   const router = useRouter();

   const pageHandler = (e, page) => {
      router.query.page = page;
      routerPush(router);
   };

   return (
      totalPages > 1 && (
         <div
            className="col-span-6 flex justify-center"
            dir="ltr">
            <Pagination
               count={totalPages}
               page={page}
               color="primary"
               onChange={pageHandler}
            />
         </div>
      )
   );
};

export default PaginationComponent;
