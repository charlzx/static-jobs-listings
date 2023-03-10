const List = ({data, setData}) => {
   const filterItems = (tag) => {
      const $new = data.filter(newData => newData.role == tag)
      setData($new)
}

   return (

      data.map((item) => (
         <div className={`list-item ${item.featured && 'sidebar'}`} key={item.id}>
            <img src={item.logo} alt=""/>
            
            <div className="item-section">
               <div>
                  <p className="item-company">{item.company}</p>
                  {item.new && <span className="item-new">New!</span>}
                  {item.featured && <span className="item-featured">Featured</span>}
               </div>

               <p className="item-position">{item.position}</p>
               <p className="item-info">
                  <span>{item.postedAt}</span> 
                  <span>•</span> 
                  <span>{item.contract}</span>
                  <span>•</span> 
                  <span>{item.location}</span>
               </p>   
            </div>

            <ul className="item-tags">
               <li onClick={() => {filterItems(item.role)}}>{item.role}</li>
               <li onClick={() => {filterItems(item.level)}}>{item.level}</li>
               {item.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
               ))}
               {item.languages.map((lang, index) => (
                  <li key={index}>{lang}</li>
               ))}
            </ul>
         </div>
      ))
   );
}
 
export default List;