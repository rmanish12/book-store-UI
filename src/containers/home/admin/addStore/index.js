import React, { useState, useEffect } from "react";
import axios from "axios";
import getHeader from "../../../../util/getHeader";

import AddStore from "../../../../components/home/admin/stores/AddStore";
import DialogBox from "../../../../components/dialog/DialogBox";
import Loader from "../../../../components/loader/Loader";

const initialState = {
  name: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  pinCode: "",
  errors: {
    name: false,
    addressLine1: false,
    city: false,
    state: false,
    pinCode: false,
  },
};

const addStore = (props) => {
  const originalStateCopy = JSON.parse(JSON.stringify(initialState));
  const [formFields, setFormFields] = useState(originalStateCopy);

  const [modalProps, setModalProps] = useState({
    state: "",
    message: "",
    showModal: false,
  });

  const [showLoader, setLoaderShow] = useState(false);

  useEffect(() => {
    console.log("fields: ", formFields);
  }, [formFields.errors]);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const onResetHandler = () => {
    const originalState = JSON.parse(JSON.stringify(initialState));
    setFormFields(originalState);
  };

  const onSubmitHandler = (e) => {
    if (validateFields()) {
      const {
        name,
        addressLine1,
        addressLine2,
        city,
        state,
        pinCode,
      } = formFields;

      const payload = {
        name,
        address: {
          addressLine1,
          addressLine2,
          city,
          state,
          pinCode: parseInt(pinCode),
        },
      };

      const header = getHeader();

      setLoaderShow(true);

      axios
        .post("/store", payload, header)
        .then((res) => {
          setLoaderShow(false);
          setModalProps({
            state: "success",
            showModal: true,
            message: res.data.message,
          });
        })
        .catch((err) => {
          setLoaderShow(false);
          setModalProps({
            state: "error",
            showModal: true,
            message: err.response.data.message,
          });
        });
    }
  };

  const onModalHide = () => {
    onResetHandler()
    
    setModalProps({
        ...modalProps,
        showModal: false
    })
  }

  const validateFields = () => {
    const { name, addressLine1, city, state, pinCode } = formFields;

    if (
      name.trim().length > 0 &&
      addressLine1.trim().length > 0 &&
      city.trim().length > 0 &&
      state.trim().length > 0 &&
      pinCode.trim().length === 6
    ) {
      setFormFields({
        errors: { ...initialState.errors },
      });

      return true;
    } else {
      if (name.trim().length === 0) {
        const formFieldsCopy = { ...formFields };
        formFieldsCopy.errors.name = true;
        setFormFields(formFieldsCopy);
      }

      if (addressLine1.trim().length === 0) {
        const formFieldsCopy = { ...formFields };
        formFieldsCopy.errors.addressLine1 = true;
        setFormFields(formFieldsCopy);
      }

      if (city.trim().length === 0) {
        const formFieldsCopy = { ...formFields };
        formFieldsCopy.errors.city = true;
        setFormFields(formFieldsCopy);
      }

      if (state.trim().length === 0) {
        const formFieldsCopy = { ...formFields };
        formFieldsCopy.errors.state = true;
        setFormFields(formFieldsCopy);
      }

      if (pinCode.trim().length !== 6) {
        const formFieldsCopy = { ...formFields };
        formFieldsCopy.errors.pinCode = true;
        setFormFields(formFieldsCopy);
      }

      return false;
    }
  };

  return (
    <>
      <AddStore
        formFields={formFields}
        onChangeHandler={onChangeHandler}
        onResetHandler={onResetHandler}
        onSubmitHandler={onSubmitHandler}
      />

      <Loader show={showLoader} />
      <DialogBox
        show={modalProps.showModal}
        onHide={onModalHide}
        state={modalProps.state}
        message={modalProps.message}
      />
    </>
  );
};

export default addStore;
