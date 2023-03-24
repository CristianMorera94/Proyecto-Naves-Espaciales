import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShips } from "../../redux/Actions/actions";
import { Link } from "react-router-dom";
import Nar from "../../components/Nar/Nar";
import Cardships from "../../components/cardships/cardships";
import Pagination from "../../components/pagination/pagination";
import "./home.css";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShips());
  }, [dispatch]);

  const allships = useSelector((state) => state.ships);

  const [currentPage, setCurrentPage] = useState(1);
  const [shipsPage, setShipsPase] = useState(10);

  const indexOfLastShips = currentPage * shipsPage;
  const indexOfFirstShips = indexOfLastShips - shipsPage;

  const currentShips = allships.slice(indexOfFirstShips, indexOfLastShips);

  const pagination = (pageNumber) => {
    if (pageNumber === 1) {
      setShipsPase(10);
      setCurrentPage(pageNumber);
    } else {
      setShipsPase(10);
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="containercard">
      <div className="nar">
        <Nar />
      </div>
      <div className="body">
        <div className="filter">
          <h3>hola</h3>
        </div>
        <div className="body2">
          <div className="prop">
            <h3>hola...</h3>
          </div>
          <div className="cont-card">
            <div className="card1">
              <div className="card2">
                {currentShips?.map((x) => {
                  return (
                    <Link key={x.id} to={"/ships/" + x.id}>
                      <Cardships name={x.name} image={x.image} />
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="pagination">
              <Pagination
                shipsPage={shipsPage}
                allships={allships.length}
                pagination={pagination}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
