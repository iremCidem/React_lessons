import React from "react";
import "./App.css";

import { usePosition } from "use-position";

function App() {
  const { latitude, longitude } = usePosition();

  return <div className="App"></div>;
}

export default App;
/*kullanacağımız npm paketleri;
 npm use position:enlem ve boylam değerini almamızı sağlar.
 */
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// c1a3d86b8c430b91556bafd04c421277
