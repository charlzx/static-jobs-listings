import { useState } from "react";

const List = ({data, setData, datafile}) => {
   const filterRole = (tag) => {
      const $new = data.filter(newData => newData.role == tag)
      setData($new)
   }
   const filterLevel = (tag) => {
      const $new = data.filter(newData => newData.level == tag)
      setData($new)
   }
   const filterTools = (tag) => {
      const $new = data.filter(newData => newData.tools.includes(tag))
      setData($new)
   }
   const filterLang = (tag) => {
      const $new = data.filter(newData => newData.languages.includes(tag))
      setData($new)
   }

   const [filterList, setFilterList] = useState([])
   return (
      <>
         {filterList.length > 0 && <div className="list-filter"></div>}
         { data.length !== 10 && <button className="reset-data" onClick={() => {setData(datafile)}}>reset</button>}

         {data.map((item) => (
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
                  <li onClick={() => {filterRole(item.role)}}>{item.role}</li>
                  <li onClick={() => {filterLevel(item.level)}}>{item.level}</li>
                  {item.tools.map((tool, index) => (
                     <li key={index} onClick={() => {filterTools(tool)}}>{tool}</li>
                  ))} 
                  {item.languages.map((lang, index) => (
                     <li key={index} onClick={() => {filterLang(lang)}}>{lang}</li>
                  ))}
               </ul>
            </div>
         ))}
      </>
   );
}
 
export default List;