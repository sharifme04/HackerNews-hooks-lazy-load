import React, { useState,  useCallback} from 'react';
import PropTypes from 'prop-types';

const StoryComponent = ({stories}) =>{
  const [selected, setSelected] = useState(new Map());
  const onSelect = useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
    }, [selected]);

  return (
    <div className="gridContainer">
      {stories && stories.map(e =>
        <div
          key={e.id}
          className={`card mx-1 my-1 ${!!selected.get(e.id) ? "card-expand" :"card-actual"}`}
          onClick={()=>onSelect(e.id)}
        >
        <div className="row no-gutters mx-1 my-1">
        <div className="col-md-3 mt-3">
           <span style={{fontSize:"20px"}}>&#9650;</span>
         <p className="card-text">Score</p>
        </div>
        <div className="col-md-9">
         <div className="card-body">
           <h6 className="card-title">{e.title}</h6>
           <p className="card-text">By: {e.by}</p>
           <p className="card-text"><small>{e.text}</small></p>
         </div>
         </div>
        </div>
      </div>)}
    </div>
)};

StoryComponent.propTypes = {
  stories: PropTypes.array
}

export default StoryComponent;
