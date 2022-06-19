import React from "react";
import { Rate } from "../components/Rate";
import { Container, Navbar } from "react-bootstrap";

export const Header = ({ setTextSearch, setRateSearching, rateSearching }) => {
  return (
    <div>
      <Navbar bg="danger">
        <Container>
          <Rate setRateSearching={setRateSearching} rating={rateSearching} />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            onChange={(e) => setTextSearch(e.target.value)}
          />
        </Container>
      </Navbar>
    </div>
  );
};
