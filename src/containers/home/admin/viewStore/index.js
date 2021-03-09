import React, { useState, useEffect } from "react";
import axios from "axios";

import ViewStore from "../../../../components/home/admin/stores/ViewStore";
import Loader from "../../../../components/loader/Loader";

import getHeader from "../../../../util/getHeader";

const viewStore = (props) => {
  const [store, setStore] = useState([]);
  const [showLoader, setLoaderShow] = useState(false);

  useEffect(() => {
    const header = getHeader();

    setLoaderShow(true)
    axios
      .get("/store", header)
      .then((res) => {
          setLoaderShow(false)
        setStore(res.data);
      })
      .catch((err) => {
          setLoaderShow(false)
      });
  }, []);

  return (
    <>
      <ViewStore stores={store} />
      <Loader show={showLoader} />
    </>
  );
};

export default viewStore;
