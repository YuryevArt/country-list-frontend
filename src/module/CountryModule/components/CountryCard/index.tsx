import { Country } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import noImgIcon from "./assets/no-image.png";

import styles from "./index.module.css";

interface Props {
  country: Country;
}

export const CountryCard = ({ country }: Props) => {
  const { flag_url = "", name_ru, iso_code2 } = country;
  const [imgSrc, setImgSrc] = useState(flag_url);

  return (
    <div className={styles.root}>
      {flag_url ? (
        <Image
          className={styles.flag}
          src={imgSrc}
          alt={iso_code2}
          onError={() => {
            setImgSrc(noImgIcon.src);
          }}
          width={60}
          height={40}
        />
      ) : (
        <Image
          className={styles.flag}
          src={noImgIcon}
          alt={iso_code2}
          width={60}
          height={40}
        />
      )}
      <span>{name_ru}</span>
    </div>
  );
};
