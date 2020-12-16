import React from 'react';
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import FriendList from './FriendList/FriendList';
import user from './Profile/user.json';
import stats from './Stats/statsInit';
import friends from './FriendList/friends.json';
import TransactionHistory from './Transactions/TransactionHistory';
import items from './Transactions/transactions.json';

const App = () => (
    <>
        <Profile {...user} />
        <Stats title="Upload stats" stats={stats} />
        <FriendList friends={friends} />
        <TransactionHistory transactions={items} />
    </>
);

export default App;