import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getShipId} from "../../redux/Actions/actions"

export default function Detailships() {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShipId(id));
  }, [dispatch, id]);

  const detail = useSelector((state) => state.detail);

  return (
    <div className={""}>
      <h2>Name:{detail.name}</h2>
      <img src={detail.image}/>
      <h3>Country:{detail.country}</h3>
      <h3>yearstart:{detail.yearstart}</h3>
      <h3>yearend:{detail.yearend}</h3>
      <h3>destination:{detail.destination}</h3>
      <h3>description:{detail.description}</h3>
    </div>
  );
}
