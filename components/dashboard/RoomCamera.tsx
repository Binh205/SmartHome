import React from 'react';

const RoomCamera: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <img src="/api/placeholder/300/200" alt="Living room" className="w-full h-48 object-cover" />
    </div>
  );
};

export default RoomCamera;