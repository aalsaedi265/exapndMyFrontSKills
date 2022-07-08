import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React,{useState} from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {

  const [firstBlog, setFirstBlog] = useState(0)
  const [lastBlog, setLastBlog] = useState(15)
  
  const currentPaginationData = blogs.posts.slice(firstBlog, lastBlog);

  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(15)
//number of blongs on page
  function pageRow(pageSize){
    setPageSize(parseInt(pageSize))
    setLastBlog(pageSize)
    setFirstBlog(0)
    setCurrentPage(1)
  }

  const setPageRangeVals = (currentPage, lastUpdate,firstUpdate)=>{
    setCurrentPage(currentPage)
    setLastBlog(lastUpdate)
    setFirstBlog(firstUpdate)
  }
//move from page to page by clicking a number
  const updatePage = (currentPage) =>{
    let lastUpdate = currentPage*pageSize
    let fistUpdate = lastUpdate - pageSize

    setPageRangeVals(currentPage, lastUpdate, fistUpdate)
  }

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={pageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={pageRow}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
