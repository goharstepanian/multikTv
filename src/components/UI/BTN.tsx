// import React from 'react'
import { GenresType } from "../../types/types";
import styles from "./BTN.module.css"

type BTNPropsType = {
    genre: GenresType
}

const BTN = ({genre}: BTNPropsType) => {
  return (
      <button className={styles.btn}>{genre.name}</button>
  )
}

export default BTN