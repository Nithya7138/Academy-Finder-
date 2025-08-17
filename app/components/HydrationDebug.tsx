'use client';

import { useEffect, useState } from 'react';

export default function HydrationDebug() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    console.log('Client hydrated successfully');
  }, []);

  if (!isClient) {
    return <div style={{ display: 'none' }}>Loading...</div>;
  }

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: 'green', 
      color: 'white', 
      padding: '5px',
      fontSize: '12px',
      zIndex: 9999
    }}>
      ✓ Hydrated
    </div>
  );
}