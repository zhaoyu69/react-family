import * as React from 'react';
import * as styles from './hello.less';

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1 className={styles.hello}>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}