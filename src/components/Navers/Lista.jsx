import React, { useContext, useEffect } from "react";
import Card from "./Card";

import Context from "../../Context";

function Lista({ popUp, setHandle }) {
  const { fetchApi, dados } = useContext(Context);

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="lista">
      {dados.map((e) => (
        <Card
          popUp={popUp}
          id={e.id}
          url={e.url}
          job={e.job_role}
          name={e.name}
        />
      ))}
    </div>
  );
}

export default Lista;
