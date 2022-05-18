import React from 'react';

export default props => (
  <table className="table" style={{ cursor: "pointer" }}>
    <thead>
      <tr>
        <th onClick={props.onSort.bind(null, "id")}>
          ID {props.sortField === "id" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "productName")}>
        Product Name{" "}
          {props.sortField === "productName" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "colour")}>
          Colour{" "}
          {props.sortField === "colour" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "department")}>
        Department{" "}
          {props.sortField === "department" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "material")}>
        material{" "}
          {props.sortField === "material" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "price")}>
        price{" "}
          {props.sortField === "price" ? <small>{props.sort}</small> : null}
        </th>
      </tr>
    </thead>
    <tbody>
            { props.data.map(item =>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.productName}</td>
                    <td>{item.colour}</td>
                    <td>{item.department}</td>
                    <td>{item.material}</td>
                    <td>{item.price}</td>
                </tr>
            ))}
        </tbody>
    </table>
)