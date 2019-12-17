import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import styles from "./List.module.scss";

const List: React.FC = () => {
  const companies = useSelector(({ companies }: RootState) => companies);

  return (
    <table className={styles.container}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {companies.items.map(company => (
          <tr>
            <td>{company.name}</td>
            <td>{company.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
