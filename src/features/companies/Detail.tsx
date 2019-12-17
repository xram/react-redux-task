import React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { RootState } from "../../app/rootReducer";
import styles from "./Detail.module.scss";

interface Props {
  id: string;
}

const Detail: React.FC<RouteComponentProps<Props>> = ({
  match
}: RouteComponentProps<Props>) => {
  const companyId = parseInt(match.params.id);
  const { company, nearbyCompanies } = useSelector(
    ({ companies }: RootState) => {
      const company = companies.items.find(({ id }) => id === companyId);
      const nearbyCompanies = [];

      if (company) {
        const selectedCompanyCountry = company.address.country;

        nearbyCompanies.push(
          ...companies.items.filter(
            ({ address: { country } }) => country === selectedCompanyCountry
          )
        );
      }

      return { company, nearbyCompanies };
    }
  );

  if (!company) {
    return <div>Company not found!</div>;
  }

  return (
    <div>
      <div className={styles.imageContainer}>
        <img alt="" src={company.image} />
      </div>
      <div className={styles.metadata}>
        <div>
          <h2 className={styles.heading}>Address</h2>
          {company.address.number} {company.address.street}
          <br />
          {company.address.city}, {company.address.zip}
        </div>
        <div>
          <h2 className={styles.heading}>Contact</h2>
          <a href={`tel:${company.phone}`}>{company.phone}</a>
          <br />
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
        <div>
          <h2 className={styles.heading}>Nearby Places</h2>
          <table>
            <thead className="sr-only">
              <tr>
                <th>Name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {nearbyCompanies.map(({ name, address }) => (
                <tr>
                  <td>{name}</td>
                  <td>
                    {address.number} {address.street}, {address.city},{" "}
                    {address.zip}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Detail;
