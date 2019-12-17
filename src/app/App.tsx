import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCompanies } from "../features/companies/companiesSlice";
import List from "../features/companies/List";
import "./App.css";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchCompanies());
    },
    [dispatch]
  );

  return (
    <div className="container">
      <List />
    </div>
  );
};

export default App;
