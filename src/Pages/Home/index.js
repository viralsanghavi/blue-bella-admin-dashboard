import React from "react";
import {Box} from "rebass";
import Table from "../../components/Table/Table";
import {auth} from "../../firebase";
import "./Home.css";

const Home = ({user}) => {
  return (
    <div className="home">
      <header className="homeHeader">
        <h1>{user.name ?? user.email}</h1>
        <p>
          <button onClick={() => auth.signOut()} className="homeLogout">
            Sign out
          </button>
        </p>
      </header>
      <section className="homeHeroSection">
        <Table
          cellSx={{py: 4}}
          header={[
            "Sr No.",
            "Booking Name",
            "Amount Paid",
            "Booking Type",
            "Number of People",
            "Check in date",
            "Check out date",
            "Tipi Type",
            "Order Id",
            "Email",
            "Notes",
          ]}
          rows={[
            [
              <Box>1</Box>,
              <Box>Viral Sanghavi</Box>,
              <Box>$1234.44</Box>,
              <Box>Couple</Box>,
              <Box>2</Box>,
              <Box>01/01/2001</Box>,
              <Box>01/01/2001</Box>,
              <Box>Swiss</Box>,
              <Box>123ABC09DEF</Box>,
              <Box>vsanghavi3@gmail.com</Box>,
              <Box>123ABC09DEF</Box>,
            ],
            [
              <Box>2</Box>,
              <Box>Viral Sanghavi</Box>,
              <Box>$1234.44</Box>,
              <Box>Couple</Box>,
              <Box>2</Box>,
              <Box>01/01/2001</Box>,
              <Box>01/01/2001</Box>,
              <Box>Swiss</Box>,
              <Box>123ABC09DEF</Box>,
              <Box>vsanghavi3@gmail.com</Box>,
              <Box>123ABC09DEF</Box>,
            ],
            [
              <Box>3</Box>,
              <Box>Viral Sanghavi</Box>,
              <Box>$1234.44</Box>,
              <Box>Couple</Box>,
              <Box>2</Box>,
              <Box>01/01/2001</Box>,
              <Box>01/01/2001</Box>,
              <Box>Swiss</Box>,
              <Box>123ABC09DEF</Box>,
              <Box>vsanghavi3@gmail.com</Box>,
              <Box>123ABC09DEF</Box>,
            ],
            [
              <Box>4</Box>,
              <Box>Viral Sanghavi</Box>,
              <Box>$1234.44</Box>,
              <Box>Couple</Box>,
              <Box>2</Box>,
              <Box>01/01/2001</Box>,
              <Box>01/01/2001</Box>,
              <Box>Swiss</Box>,
              <Box>123ABC09DEF</Box>,
              <Box>vsanghavi3@gmail.com</Box>,
              <Box>123ABC09DEF</Box>,
            ],
          ]}
        />
      </section>
    </div>
  );
};

export default Home;
