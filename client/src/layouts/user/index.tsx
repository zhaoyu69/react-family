import React from 'react';
import styles from './index.less';

export default function UserLayout({ children }) {
  return (
    <div className={styles.userLayout}>
      <h1>User</h1>
      {children}
    </div>
  );
}
