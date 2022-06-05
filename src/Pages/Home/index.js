import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAt,
  where,
} from "firebase/firestore";
import React, {useEffect, useState} from "react";
import {Box} from "rebass";
import Table from "../../components/Table/Table";
import {auth, db} from "../../firebase";
import {tipis} from "../../utils/constants";
import "./Home.css";

const Home = ({user}) => {
  const [bookingsData, setBookingsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const convertDate = (date) => {
    return new Date(date?.toDate().getTime()).toLocaleDateString();
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      (async () => {
        const querySnapshot = searchQuery
          ? await getDocs(
              query(
                collection(db, "bookings"),
                orderBy("bookingId"),
                startAt(searchQuery),
                limit(40)
              )
            )
          : await getDocs(
              query(
                collection(db, "bookings"),
                orderBy("startDate", "desc"),
                limit(40)
              )
            );
        const bookings = [];
        querySnapshot?.forEach(async (snapshot) => {
          console.log(snapshot.data());
          const docRef = doc(db, "orders", snapshot.data().bookingId);
          const docSnap = await getDoc(docRef);

          bookings.push({
            id: snapshot.id,
            ...snapshot.data(),
            ...docSnap.data(),
          });
        });
        setTimeout(() => {
          const transformedData = bookings.map(
            (
              {
                name,
                amount,
                bookingType,
                numberOfPeople,
                startDate,
                endDate,
                tipiType,
                bookingId,
                email,
                notes,
              },
              index
            ) => [
              <Box>{index + 1}</Box>,
              <Box>{name}</Box>,
              <Box>{amount}</Box>,
              <Box>{bookingType}</Box>,
              <Box>{numberOfPeople}</Box>,
              <Box>{`${convertDate(startDate)}`}</Box>,
              <Box>{`${convertDate(endDate)}`}</Box>,
              <Box>{tipis[tipiType]}</Box>,
              <Box>{bookingId}</Box>,
              <Box>{email}</Box>,
              <Box>{notes}</Box>,
            ]
          );
          setBookingsData(transformedData);
        }, 1000);
      })();
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

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
      <section style={{padding: "20px"}}>
        <input
          style={{
            width: "100%",
            height: "100%",
            padding: "12px 20px",
            backgroundColor: "white",
            fontSize: "16px",
            fontWeight: "400",
            border: "1px solid black",
            borderRadius: "7px",
            boxSizing: "border-box",
            "&:active, &:focus": {
              outline: "none",
            },
          }}
          autoFocus
          type="text"
          autoComplete="off"
          className="live-search-field"
          placeholder="Search by booking Id"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>
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
          rows={bookingsData}
        />
      </section>
    </div>
  );
};

export default Home;
