import React, { ReactNode, useState } from "react";

import styles from "./index.module.css";
import clsx from "clsx";

interface Props {
  onRemove: () => void;
  children: ReactNode;
}

const removeDelay = 2000;

export const Item = ({ onRemove, children }: Props) => {
  const [isClosing, setClosing] = useState(false);

  const onRemoveButtonClick = async () => {
    setClosing(true);
    setTimeout(onRemove, removeDelay);
  };

  return (
    <div
      className={clsx(styles.item, {
        [styles.closing]: isClosing,
      })}
    >
      <div className={styles.itemInner}>
        {children}
        <button onClick={onRemoveButtonClick}>Удалить</button>
      </div>
    </div>
  );
};
