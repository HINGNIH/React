
const ListItem = ({id, imgurl, name, animal, desc,isSelected,  onSelect}) => {
    return (
        <li>
            <a href="#">
            <img src={imgurl} alt={name} />
             <div>
                  <h3>{name}</h3>
                  <p>{animal}</p>
             </div>
        <input type="radio" 
        name="character" checked={isSelected} 
        onChange={()=>onSelect(id)}/>
        </a></li>
    );
};

export default ListItem;
