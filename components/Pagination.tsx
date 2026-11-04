"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({
    totalPages,
} : {
    totalPages: number;
}) {
    const pathname = usePathname(); // Го зема тековниот пат на страницата. Ако си на http://localhost:3000/movies?page=1, ова ќе врати само "/movies"
    const searchParams = useSearchParams(); // Ги зема параметрите од URL-то (се што стои после "?"). Ако URL-то е /movies?genre=action&page=2, ги зема genre=action и page=2
    const currentPage = Number(searchParams.get("page")) || 1; // Ја чита вредноста за "page" од URL-то и ја претвора во број со Number(). Делот || 1 (default) значи: 
    //                                                         ако во URL-то уште нема таг page (на пример корисникот само отворил /movies), автоматски претпостави дека сме на страница 1.


    // Функцијата createPageURL - генерира нов URL за секој број на страница или копчињата Previous/Next
    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams); // Прави копија од постоечките параметри за да не ги изгубиш другите филтри (на пример, ако корисникот веќе пребарува по жанр или поим).
        params.set("page", pageNumber.toString()); // Го ажурира или го додава само параметарот "page" со новиот број
        return `${pathname}?${params.toString()}`; // Враќа комплетен стринг на линкот
    };
    return(
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-end">

                {/* Previous */}
                <li className={`page-item ${currentPage <= 1 ? "disabled" : ""}`}>
                    <Link
                        className="page-link"
                        href={createPageURL(currentPage - 1)} 
                        tabIndex={currentPage <= 1 ? -1 : undefined}
                    >
                        Previous
                    </Link>
                </li>


                {/* Page numbers - овој код е за автоматско генерирање на копчиња со броеви (1, 2, 3) брз основа на вкупниот бр на страници (totalPages) */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <li
                        key={page}
                        className={`page-item ${currentPage === page ? "active" : ""}`}
                        >
                            <Link className="page-link" href={createPageURL(page)} >
                                {page}
                            </Link>
                        </li>
                ))}


                {/* Next */}
                <li className={`page-item ${currentPage >= totalPages ? "disabled" : ""}`}>
                    <Link 
                        className="page-link" 
                        href={createPageURL(currentPage + 1)}
                    >
                        Next
                    </Link>
                </li>
             </ul>
        </nav>
    );

}
