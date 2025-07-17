// UserGrid.tsx

'use client'
import React from 'react';
import { userData } from '../constants/userData';

import { useRouter } from 'next/navigation';

const UserGrid = () => {
  const navigate = useRouter();

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      padding: '20px'
    }}>
      {userData.map((user, index) => (
        <div
          key={index}
          onClick={() => navigate.push(user.link)}
          className='flex flex-col gap-3 items-center justify-center w-80 h-60 bg-gray-200 rounded-4xl'
        >
          <div style={{ fontWeight: 'bold' }}>{user.role}</div>
          <div>{user.count} users</div>
        </div>
      ))}
    </div>
  );
};

export default UserGrid;
