import styles from "./CommonHeader.module.scss";

import React from "react";

function CommonHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.header__logoBox}>
        <img src="" alt="" />
        <span className={styles.header__logoBox__title}>PhotoSplash</span>
      </div>
      <div className={styles.header__profileBox}>
        <button className={styles.header__profileBox_button}>사진제출</button>
        <button className={styles.header__profileBox_button}>북마크</button>
        <span className={styles.header__profileBox__userName}>JPK6327</span>
      </div>
    </div>
  );
}

export default CommonHeader;
