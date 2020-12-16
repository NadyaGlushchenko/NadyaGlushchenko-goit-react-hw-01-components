import React from 'react';
import T from 'prop-types';
import styles from './Transactions.module.css';

const TransactionHistory = (props) => (
    <div className={styles.tableSection}>
        <table className={styles.transactionHistory}>
            <thead className={styles.thead}>
                <tr className={styles.tableTitle}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {props.transactions.map(item => (
                    <tr className={styles.tbody} key={item.id}>
                        <td className={styles.tdbody}>{item.type}</td>
                        <td className={styles.tdbody}>{item.amount}</td>
                        <td className={styles.tdbody}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

TransactionHistory.propTypes = {
    transactions: T.arrayOf(T.shape({
        id: T.string.isRequired,
        type: T.string.isRequired,
        amount: T.string.isRequired,
        currency: T.string.isRequired
    })).isRequired
};

export default TransactionHistory;