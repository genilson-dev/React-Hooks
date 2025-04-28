import React from "react";
import PageTitle from "../../layout/PageTitle";
import SectionTitle from "../../layout/SectionTitle";

const UseState = (props) => {
  const [count, setCount] = React.useState(0); 
  const [name, setName] = React.useState("");
  
  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle title="Exemplo 1" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
        <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
        <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
        <button className="btn" onClick={() => setCount(current => current * 100)}> 100</button>
        {/* <button className="btn" onClick={() => setCount(current => current - current * 50)}> - 50</button> */}
        {/* <button className="btn" onClick={() => setCount(current => 0)}> 0</button> */}
        </div>
      </div>
      <SectionTitle title="Exemplo 2" />
      <input type="text" className="input" value={name} onChange={e => setName(e.target.value)}/>
      <span className="text">{name}</span>
    </div>
  );
};

export default UseState;
