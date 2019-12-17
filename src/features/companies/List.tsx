import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
        {companies.items.map(company => {
          const url = `/company/${company.id}`;

          return (
            <tr>
              <td>
                <Link to={url}>{company.name}</Link>
              </td>
              <td>
                <Link to={url}>{company.description}</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
