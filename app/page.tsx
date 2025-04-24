'use client';

import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import WelcomeCard from '../components/dashboard/WelcomeCard';
import SensorsChart from '../components/dashboard/SensorsChart';
import DeviceControls from '../components/dashboard/DeviceControls';
import VisitStats from '../components/dashboard/VisitStats';
import RoomCamera from '../components/dashboard/RoomCamera';
import { useSensorData } from '../hooks/useSensorData';
import { useDeviceControl } from '../hooks/useDeviceControl';
import { useWeather } from '../hooks/useWeather';
import { VisitStats as VisitStatsType } from '../models/interfaces/stats';

export default function Home() {
  const { data, loading: dataLoading } = useSensorData('Month');
  const { devices, toggleDevice, loading: devicesLoading } = useDeviceControl();
  const { weather, loading: weatherLoading } = useWeather();
  
  // Dummy stats data
  const visitStats: VisitStatsType = {
    visits: "184k",
    growthPercentage: "20.04"
  };
  
  // Hiển thị loader khi đang fetch dữ liệu
  if (dataLoading || devicesLoading || weatherLoading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }
  
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 flex flex-col p-6 overflow-hidden">
        <Header />
        
        <div className="grid grid-cols-4 gap-6">
          {/* Left column (3/4 width) */}
          <div className="col-span-3 space-y-6">
            <WelcomeCard userName="Phu" weatherData={weather} />
            <SensorsChart data={data} />
          </div>
          
          {/* Right column (1/4 width) */}
          <div className="col-span-1 space-y-6">
            <DeviceControls devices={devices} onToggleDevice={toggleDevice} />
            <VisitStats stats={visitStats} />
            <RoomCamera />
          </div>
        </div>
      </div>
    </div>
  );
}