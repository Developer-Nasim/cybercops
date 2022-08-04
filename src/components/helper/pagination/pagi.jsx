import React, { useState, useEffect, useRef } from "react"; 
import {Pagination, usePagination } from "react-responsive-pagination-component"  

function PaginatedItems(props) {  
  
  const data = props.data;
  const { handlePageClick, totalPageCount, currPageNum, displayData } =
    usePagination({
      data: data,
      delay: 0,
      resize: true,
      responsiveOption: {
        breakPoint: 768,
        delay: 200,
        breakPointUnderViewCount: 3,
        breakPointOverViewCount: 2,
      },
    }); 
 




  return (
    <div> 
      <div> 
        {displayData.map((item) => (
          <div key={item.id}>
            <span>{item.date}</span> 
          </div>
        ))}
      </div>
      <Pagination {...{ totalPageCount, currPageNum, handlePageClick, data }} />
    </div>
  );
}

 
export default PaginatedItems;