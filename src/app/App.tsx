import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCompanies } from "../features/companies/companiesSlice";
import CompanyDetail from "../features/companies/Detail";
import CompanyList from "../features/companies/List";
import styles from "./App.module.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchCompanies());
    },
    [dispatch]
  );

  return (
    <>
      <header className={styles.header}>Logo</header>
      <div className={styles.container}>
        <Route component={CompanyList} exact={true} path="/" />
        <Route component={CompanyDetail} path="/company/:id" />
      </div>
    </>
  );
};

export default App;
