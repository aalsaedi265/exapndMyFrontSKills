export const DOTS = "...";

function usePagination({currentPage, totalCount, pageSize}) {

  var lastPage = Math.ceil(totalCount/pageSize);
  if (currentPage >= (lastPage-2) && lastPage > 4){ 
    return [1, DOTS, lastPage-2, lastPage-1, lastPage]
  }

  if(currentPage >= 3 && currentPage <= lastPage-2){
    return [1, DOTS, currentPage-1, currentPage, currentPage+1, DOTS, lastPage]
  }

  if(lastPage == 4){
    return [1, 2, 3, 4];
  }

  if(lastPage == 3){
    return [1, 2, 3];
  }

  if(lastPage == 2){
    return [1,2];
  }

  if(lastPage == 1){
    return[1];
  }

  return [1, 2, 3, DOTS, lastPage];
}
//testing

export default usePagination;
