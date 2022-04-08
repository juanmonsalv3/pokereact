import React from 'react'
import { get } from '../api';

const Regioninfo = () => {

const [regionInfo, setRegionInfo] = React.useState([]);

React.useEffect(() => {
    get(`https://pokeapi.co/api/v2/generation/`)
      .then((json) => setRegionInfo(json.results));
  }, []);

  return (
    <select>
        {regionInfo.map((info) => (
              <option key={info.name} value="volvo">{info.name}</option>
            ))}
    </select>
  )
}

export default Regioninfo