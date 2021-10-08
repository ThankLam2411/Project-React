import React from "react";
import { useLocation,Link } from "react-router-dom";
const Pagination=({pages})=>{
    const {pathname,search}=useLocation();
    const query = new URLSearchParams(search);
    const {total, limit, currentPage, next, prev, hasNext, hasPrev}=pages;
    const totalPages = Math.ceil(total/limit);// limit: so san pham toi da hien len moi trang
    
    const renderPagesHtml=(delta = 2)=>{
        const pagesHtml=[];// Mảng ds các trang
        const left = currentPage -2;// Giới hạn trái
        const right = currentPage + 2;// Giới hạn phải
        for(let i=1;i<=totalPages;i++){
            if
      (     
            i===1 ||
            i===totalPages||
            i===currentPage||
            (i >= left && i <= right))
            
            {
                pagesHtml.push(i);
            }
        }
        return pagesHtml;

    }
    const formatUrl=(page)=>{
        query.set("page",page);
        return `${pathname}?${query.toString()}`;
    }
    return (
<ul className="pagination">
    {
        hasPrev&&(
            <li className="page-item"><Link className="page-link" to={formatUrl(prev)}>Trang trước</Link></li>

        )
    }

        { 
            renderPagesHtml().map((item)=>{
            return(
                <li className={`page-item ${item===currentPage && "active"}`}><Link className="page-link" to={formatUrl(item)}>{item}</Link></li>

            )
        })
    }
    {
        hasNext&&(
            <li className="page-item"><Link className="page-link" to={formatUrl(next)}>Trang sau</Link></li>

        )
    }
</ul> 
    );
}
export default Pagination;