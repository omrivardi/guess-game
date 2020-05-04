import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { Button, Input as AntdInput } from "antd";
import styled from "styled-components";

import { guess } from "../../Actions";
//TODO: add validations
//TODO: move to .env file
// TODO: error handling
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL =  process.env.REACT_APP_BASE_URL

// better in diff file but its only 1 here
const Input = styled(AntdInput)`
  width: 30%;
  margin-bottom: 1em;
`;

const getTemp = cityName => {
  const url = `${BASE_URL}${cityName}&appId=${API_KEY}&units=metric`;
  console.log(url)
  return Axios.get(url);
};

const MainBox = ({ cityName }) => {
  const dispatch = useDispatch();

  //Assuming for now that there is no nedd for input check, need to ask
  const [temp, changeTemp] = useState();
  return (
    <>
      <h1>Guess the temperaute at {cityName}</h1>
      <p>My guess is</p>
      <Input
        value={temp}
        placeholder="Enter temperature"
        onChange={e => changeTemp(e.target.value)}
      ></Input>
      <Button
        onClick={() =>
          getTemp(cityName, temp)
            .then(res => {
              if (!res.data || !res.data.main || !res.data.main.temp) {
                console.log("error on getting temp");
                return;
              }

              dispatch(guess(temp, res.data.main.temp));
            })
            .catch(err => console.log(err))
        }
      >
        Guess now
      </Button>
    </>
  );
};

MainBox.defaultProps = {
  cityName: 'London'
}
MainBox.propTypes = {
  cityName: PropTypes.string.isRequired
};

export default MainBox;
