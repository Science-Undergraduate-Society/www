import React, { useState, createContext } from "react";
import styled from "styled-components";

export const Checkbox = () => {
    const [checkboxes, setCheckboxes] = useState({
        onCampus: false,
        offCampus: false,
        virtual: false,
      });

      const [workLocations, setLocations] = useState([]);

      // toggle all three checkboxes individually
    const handleChecked = (name) => {
        setCheckboxes((prevState) => ({
          ...prevState,
          [name]: !prevState[name],
        }));

        {/* Need to toggle adding and unadding type (adding name multiple times rn) */}
        setLocations(workLocations.concat([name]));
      };

    return (
        <><div>
            <label>
                <input
                    type="checkbox"
                    checked={checkboxes.onCampus}
                    onChange={() => handleChecked('onCampus')} />
                On Campus
            </label>
        </div>
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={checkboxes.offCampus}
                    onChange={() => handleChecked('offCampus')} />
                Off Campus
             </label>
          </div>
          <div>
                <label>
                    <input
                        type="checkbox"
                        checked={checkboxes.virtual}
                        onChange={() => handleChecked('virtual')} />
                    Virtual
                </label>
            </div></>
    );
}

// export to use in SearchBar component
export const workLocations = createContext(false);


