import React from 'react';

export const AppComponent = ({onChange, onClick, firstInputRef, secondInputRef}) => {
  return (
    <React.Fragment>
      <label className="label">
        #<input type="text" maxLength="6" placeholder="FFGGBB" onChange={onChange} ref={firstInputRef} />
      </label>
      <br />
      <label className="label">
        #<input type="text" maxLength="6" placeholder="FFGGBB" onChange={onChange} ref={secondInputRef} />
      </label>
      <br />
      <input className="button" type="button" value="GO" onClick={onClick} />
    </React.Fragment>
  )
}
