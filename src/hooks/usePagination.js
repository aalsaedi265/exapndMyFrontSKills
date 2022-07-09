export const DOTS = "...";

function usePagination({currPage, totalCount, pageSize}) {
 
  
  let lastPage = Math.ceil(totalCount/pageSize);
  if(currPage >= 3 && currPage <= lastPage-2){
    return [1,DOTS, currPage-1, currPage, currPage+1, lastPage]
  }
  if(lastPage == 4){
    return [1,2,3,4]
  }
  if(lastPage ==3){
    return [1,2,3]
  }
  if(lastPage ==2){
    return [1,2]
  }
  if(lastPage == 1){
    return[1]
  }
  return [1, 2, 3, DOTS, 5];
}

export default usePagination;
