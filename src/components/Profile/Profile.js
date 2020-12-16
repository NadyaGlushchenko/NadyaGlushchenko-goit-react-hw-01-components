import React from 'react';
import T from 'prop-types';
import styles from './Profile.module.css';

const Profile = (props) => (
    <div className={styles.profile}>
        <div className={styles.description}>
            <img
                src={props.avatar}
                alt="user avatar"
                className={styles.avatar}
            />
            <p className={styles.name}>{props.name}</p>
            <p className={styles.tag}>@{props.tag}</p>
            <p className={styles.location}>{props.location}</p>
        </div>

        <ul className={styles.stats}>
            <li className={styles.list}>
                <span className={styles.label}>Followers</span>
                <span className={styles.quantity}>{props.stats.followers}</span>
            </li>
            <li className={styles.list}>
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>{props.stats.views}</span>
            </li>
            <li className={styles.list}>
                <span className={styles.label}>Likes</span>
                <span className={styles.quantity}>{props.stats.likes}</span>
            </li>
        </ul>
    </div>
);

Profile.propTypes = {
    name: T.string.isRequired,
    tag: T.string.isRequired,
    location: T.string.isRequired,
    avatar: T.string.isRequired,
    stats: T.shape({
            followers: T.number.isRequired,
            views: T.number.isRequired,
            likes: T.number.isRequired})
    .isRequired,
};

export default Profile;