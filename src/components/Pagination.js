import React from 'react'

const Pagination = ({ postPerPage , totalPosts,paginate }) => {



    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalPosts/postPerPage);i++){
        pageNumbers.push(i)
        console.log(pageNumbers);
    }


    return (
        <nav>
            <ul className="pagination pagination-lg">
            {pageNumbers.map( number =>(
                
                <li key={number} className="page-item">
                    <a href="!#" onClick={()=> paginate(number)} className="page-link">
                        {number}
                        
                    </a>
                </li>
            ))}
            </ul>
        </nav>
    )
}

export default Pagination;