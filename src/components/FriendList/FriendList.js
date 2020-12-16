import React from 'react';
import T from 'prop-types';
// import friends from './friends.json';
import styles from './FriendList.module.css';

const isOnline = (styles) => {
    return <span className={styles.statusOnline} />;
};

const notOnline = (styles) => {
    return <span className={styles.status} />;
};

const FriendListItem = ({ friends }) => (
    friends.map(friend => (
        <li className={styles.item} key={friend.id}>
            {friend.isOnline ? isOnline(styles) : notOnline(styles)}
            <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
            <p className={styles.name}>{friend.name}</p>
        </li>
    ))
);

const FriendList = ({ friends }) => (
    <ul className={styles.friendList}>
        <FriendListItem friends={friends} />
    </ul>
);

FriendListItem.propTypes = {
    friends: T.arrayOf(T.shape({
        name: T.string.isRequired,
        avatar: T.string.isRequired,
        isOnline: T.bool.isRequired,
        id: T.number.isRequired
    }))
};

export default FriendList;
