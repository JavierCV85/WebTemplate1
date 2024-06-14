import Flicking from "@egjs/preact-flicking";
import "@egjs/preact-flicking/dist/flicking.css";
import { useCallback, useEffect, useState } from 'preact/hooks'
import { h } from "preact";


export default () => {
  const [panels, setPanels] = useState([0, 1, 2, 3, 4]);

  return <>
    <Flicking renderOnlyVisible={true}>
      {panels.map(index => <div className="flicking-panel" key={index}>{index + 1}</div>)}
    </Flicking>
    <div className="block is-flex is-justify-content-center">
      <span className="button mr-2 is-info is-outlined" onClick={() => setPanels([panels[0] - 1, ...panels])}>Prepend</span>
      <span className="button mr-2 is-info is-outlined" onClick={() => setPanels([...panels, panels[panels.length - 1] + 1])}>Append</span>
    </div>
  </>
};