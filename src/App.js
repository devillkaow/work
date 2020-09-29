import React from "react";
import ContainerLayout from "./component/ContainerLayout";
import Navbar from "./component/Navbar";
import Content from "./component/Content";
import Footer from "./component/Footer";
import Search from "./component/Search";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ContainerLayout>
        <Navbar />
        <Content>
          <Search />
        </Content>
        <Footer />
      </ContainerLayout>
    </div>
  );
}
