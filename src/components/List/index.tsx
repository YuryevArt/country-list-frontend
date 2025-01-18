import React, { ReactNode } from "react";
import { Item } from "./components/Item";

import styles from "./index.module.css";

interface Props<T> {
  items: T[];
  getItemId: (item: T) => string;
  renderItem: (item: T) => ReactNode;
  onRemove: (item: T) => void;
}

export const List = <T,>({
  items,
  getItemId,
  renderItem,
  onRemove,
}: Props<T>) => {
  return (
    <div className={styles.root}>
      {items.map((item) => (
        <Item key={getItemId(item)} onRemove={() => onRemove(item)}>
          {renderItem(item)}
        </Item>
      ))}
    </div>
  );
};
