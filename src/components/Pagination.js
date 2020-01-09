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
    pageNumbers = [...pageNumbers, i];
  }
  const intialRange = currentPage-2>= 0 ? currentPage-2: currentPage-1;
  const visiblePagination = pageNumbers.slice(intialRange, currentPage+2);

  return (
  <div>
  <ul className="pagination">
    {currentPage >1 &&
      <li className="page-item">
       <button data-testid="previous" className="page-link" onClick={()=>previousPage(currentPage)}>Previous</button>
      </li>
    }
   {visiblePagination.map(number =>(
     <li key={number} className={`page-item ${ (number === currentPage) && "active"}` }>
      <button data-testid="current" className="page-link" onClick={()=>paginate(number)}>{number}</button>
    </li>
   ))}
   {currentPage < pageNumbers.length  &&
     <li className="page-item">
       <button data-testid="next" className="page-link" onClick={()=>nextPage(currentPage)}>Next</button>
     </li>
   }
  </ul>
 </div>
 );
};

Pagination.propTypes = {
  storiesPerPage: PropTypes.number,
  totalStories: PropTypes.number,
  paginate: PropTypes.func,
  currentPage: PropTypes.number,
  previousPage:PropTypes.func,
  nextPage:PropTypes.func
}

export default Pagination;
