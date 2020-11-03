import React from 'react';
import styles from './index.less';

export default function ManageLayout({ children }) {
  return (
    <div className={styles.manageLayout}>
      <h1>Manage</h1>
      {children}
    </div>
  );
}
