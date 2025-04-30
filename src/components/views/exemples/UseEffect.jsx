import React, { useEffect, useState } from "react";

import SectionTitle from "../../layout/SectionTitle"
import PageTitle from "../../layout/PageTitle";

function calkFactory(num) {
  let n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calkFactory(n - 1) * n;
}

const UseEffect = (props) => {
  const [namber, setNamber] = useState(1);
  const [factory, setFactory] = useState(1);

  useEffect(() => {
    setFactory(calkFactory(namber));
  }, [namber]);

  useEffect(
    function () {
      if (factory > 1000000) {
        document.title = "Fatorial muito grande!";
      }
    },
    [factory]
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
        <SectionTitle title="Exercicio #01"/>
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {factory === -1 ? "Não Existe" : factory}
          </span>
        </div>
        <div>
          <input
            type="number"
            className="input"
            value={namber}
            onChange={(e) => setNamber(e.target.value)}
          />
        <SectionTitle title="Exercicio #02"/>
          {/* <span className="text">{namber}</span> */}
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
