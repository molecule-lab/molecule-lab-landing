import * as React from "react";
import Header from "../components/Header";
import SecondarySection from "../components/SecondarySection";
import * as IndexStyles from "../styles/index.module.scss";
import "../styles/base/globalResets.scss";

const IndexPage = () => {
  return (
    <main className={IndexStyles.container}>
      <Header />
      <SecondarySection />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Molecule Lab | Home</title>;
