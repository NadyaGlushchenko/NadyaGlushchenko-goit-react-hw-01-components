import React from 'react';
import T from 'prop-types';
import styles from './Stats.module.css';

const Stats = (props) => (
    <section className={styles.stats}>

        {
            props.title.length > 0 && (
                <h2 className={styles.title}>{props.title}</h2>
            )
        }
        <ul className={styles.statList}>
            {props.stats.map(item => (
                <li className={styles.item} key={item.id}>
                    <span className="label">{item.label}</span>
                    <span className="percentage">{item.percentage}</span>
                </li>
            ))}
        </ul>
    </section>
);

Stats.propTypes = {
    stats: T.arrayOf(T.shape({
        id: T.string.isRequired,
        label: T.string.isRequired,
        percentage: T.number.isRequired
    })
    ).isRequired,
};

export default Stats;