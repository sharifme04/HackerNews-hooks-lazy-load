import React from 'react';
import PropTypes from 'prop-types';

const Pagination= ({
  storiesPerPage,
  totalStories,
  paginate,
  currentPage,
  previousPage,
  nextPage
}) => {
  let pageNumbers = [];
  for (let i = 1; i <Math.ceil(totalStories/storiesPerPage); i++) {
    pageNumbers = [...pageNumbers, i]
  }
  const intialRange = currentPage-2>= 0 ? currentPage-2: currentPage-1;
  const visiblePagination = pageNumbers.slice(intialRange, currentPage+2);

  return (
  <div>
  <ul className="pagination">
    {currentPage >1 &&
      <li className="page-item">
       <button className="page-link" onClick={()=>previousPage(currentPage)}>Previous</button>
      </li>
    }
   {visiblePagination.map(number =>(
     <li key={number} className={`page-item ${ (number === currentPage) && "active"}` }>
      <button className="page-link" onClick={()=>paginate(number)}>{number}</button>
    </li>
   ))}
   {currentPage < pageNumbers.length  &&
     <li className="page-item">
       <button className="page-link" onClick={()=>nextPage(currentPage)}>Next</button>
     </li>
   }
  </ul>
 </div>
 );
};

Pagination.propTypes = {
  storiesPerPage: PropTypes.number.isRequired,
  totalStories: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  previousPage:PropTypes.func.isRequired,
  nextPage:PropTypes.func.isRequired
}

export default Pagination;
