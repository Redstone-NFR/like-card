import React, { useState } from "react";
import styles from "./likecard.module.css";

function LikeCard({ name }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.likeSection}>
        <button onClick={handleLike} className={styles.likeButton}>
          👍 Like
        </button>
        <span className={styles.likeCount}>{likes}</span>
      </div>
    </div>
  );
}

export default LikeCard;
