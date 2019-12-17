import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCompanies } from "../features/companies/companiesSlice";
import CompanyDetail from "../features/companies/Detail";
import CompanyList from "../features/companies/List";
import Spinner from "../components/Spinner";
import styles from "./App.module.scss";
import { RootState } from "./rootReducer";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(({ companies }: RootState) => companies);

  useEffect(
    () => {
      dispatch(fetchCompanies());
    },
    [dispatch]
  );

  if (isLoading) {
    return <Spinner />;
  }

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
