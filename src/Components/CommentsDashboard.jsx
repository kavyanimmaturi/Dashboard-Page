
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const CommentsDashboard = () => {

   const navigate = useNavigate();
   const [comments, setComments] = useState([]);
   const [search, setSearch] = useState(localStorage.getItem('search') || '');
   const [sortField, setSortField] = useState(localStorage.getItem('sortField') || '');
   const [sortOrder, setSortOrder] = useState(localStorage.getItem('sortOrder') || '');
   const [page, setPage] = useState(parseInt(localStorage.getItem('page')) || 1);
   const [pageSize, setPageSize] = useState(parseInt(localStorage.getItem('pageSize')) || 10);

   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(data => setComments(data));
   })

   useEffect(() => {
     localStorage.setItem('search', search);
     localStorage.setItem('sortField', sortField);
     localStorage.setItem('sortOrder', sortOrder);
     localStorage.setItem('page', page.toString());
     localStorage.setItem('pageSize', pageSize.toString());
   }, [search, sortField, sortOrder, page, pageSize]);

   const filtered = comments.filter(comment => 
      comment.name.toLowerCase().includes(search.toLowerCase()) || 
      comment.email.toLowerCase().includes(search.toLowerCase())
   );
   
   const sorted = [...filtered].sort((a,b) => {
      if(!sortField) return 0;
      if(sortOrder === "asc") return a[sortField] > b[sortField] ? 1 : -1;
      if(sortOrder === "desc") return a[sortField] < b[sortField] ? 1 : -1;
      return 0;
   })

   const totalPages = Math.ceil(sorted.length / pageSize);
   const paginated = sorted.slice((page - 1) * pageSize, page*pageSize);

   const toggleShort = (field) => {
      if(sortField !== field) {
        setSortField(field)
        setSortField('asc');
      } else if (sortOrder === "asc") {
        setSortOrder('desc');
      } else if (sortOrder === 'desc'){
          setSortField('');
          setSortOrder('');
      }
   };

  return (
    <div style={{padding: '20px'}}>
      <h2>Comments Dashboard</h2>
      <input placeholder="Search name, email, comment" value={search} onChange={e => setSearch(e.target.value)} style={{margin: '10px', padding: '5px', width: '250px'}}/>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th onClick={() => toggleShort('postId')}>
              Post ID {sortField === 'postId' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => toggleShort('name')}>
              Name {sortField === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => toggleShort('email')}>
              Email {sortField === 'email' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
           {paginated.map(c => (
            <tr key={c.id}>
              <td>{c.postId}</td>
              <td>{c.name}</td>
              <td>{c.email.toLowerCase()}</td>
              <td>{c.body}</td>
            </tr>
           ))}
        </tbody>
      </table>

      <div style={{ marginTop: '10px'}} className="pagination">
        <span className="span">Page: </span>
           {[...Array(totalPages).keys()].map(i => (
             <button
               key={i}
               onClick={() => setPage(i + 1)}
               disabled={page === i + 1}
               className="pages"
             >
              {i + 1}
             </button>
           ))}

           <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} className="pages">
            <option value={10}>10</option>
            <option value={50}>50</option> 
            <option value={100}>100</option>
           </select>
      </div>
    </div>
  )
}

export default CommentsDashboard
