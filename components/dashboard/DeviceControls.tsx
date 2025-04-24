import React from 'react';
import ToggleSwitch from '../ui/ToggleSwitch';
import { DeviceState, DeviceType } from '../../models/deviceState';
import { AirQualityIcon, HumidityIcon, LightIntensityIcon, TemperatureIcon } from '../ui/Icons';

interface DeviceControlsProps {
  devices: DeviceState;
  onToggleDevice: (device: DeviceType, state: boolean) => void;
}

const DeviceControls: React.FC<DeviceControlsProps> = ({ devices, onToggleDevice }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className={`p-4 rounded-2xl shadow-sm flex flex-col items-center ${devices.humidity ? 'bg-[#7c4dff]' : 'bg-white'}`}>
      <div className="flex justify-between w-full mb-2">
        <span className={`text-lg font-medium ${devices.humidity ? 'text-white' : 'text-gray-500'}`}>
          {devices.humidity ? 'ON' : 'OFF'}
        </span>
        <ToggleSwitch isOn={devices.humidity} onToggle={() => onToggleDevice('humidity', !devices.humidity)} />
      </div>
      <div className="w-12 h-12 flex items-center justify-center my-2">
        <span className={`w-8 h-8 ${devices.humidity ? 'text-white' : 'text-[#7c4dff]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <HumidityIcon/>
        </span>
      </div>
      <span className={`mt-2 text-lg font-medium ${devices.humidity ? 'text-white' : 'text-[#7c4dff]'}`}>
        Humidity
      </span>
    </div>
      
      <div className={`p-4 rounded-2xl shadow-sm flex flex-col items-center ${devices.temperature ? 'bg-[#7c4dff]' : 'bg-white'}`}>
      <div className="flex justify-between w-full mb-2">
        <span className={`text-lg font-medium ${devices.temperature ? 'text-white' : 'text-gray-500'}`}>
          {devices.temperature ? 'ON' : 'OFF'}
        </span>
        <ToggleSwitch isOn={devices.temperature} onToggle={() => onToggleDevice('temperature', !devices.temperature)} />
      </div>
      <div className="w-12 h-12 flex items-center justify-center my-2">
        <span className={`w-8 h-8 ${devices.temperature ? 'text-white' : 'text-[#7c4dff]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <TemperatureIcon/>
        </span>
      </div>
      <span className={`mt-2 text-lg font-medium ${devices.temperature ? 'text-white' : 'text-[#7c4dff]'}`}>
        Temperature
      </span>
    </div>
      
    <div className={`p-4 rounded-2xl shadow-sm flex flex-col items-center ${devices.airQuality ? 'bg-[#7c4dff]' : 'bg-white'}`}>
      <div className="flex justify-between w-full mb-2">
        <span className={`text-lg font-medium ${devices.airQuality ? 'text-white' : 'text-gray-500'}`}>
          {devices.airQuality ? 'ON' : 'OFF'}
        </span>
        <ToggleSwitch isOn={devices.airQuality} onToggle={() => onToggleDevice('airQuality', !devices.airQuality)} />
      </div>
      <div className="w-12 h-12 flex items-center justify-center my-2">
        <span className={`w-8 h-8 ${devices.airQuality ? 'text-white' : 'text-[#7c4dff]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <AirQualityIcon/>
        </span>
      </div>
      <span className={`mt-2 text-lg font-medium ${devices.airQuality ? 'text-white' : 'text-[#7c4dff]'}`}>
        Air Quality
      </span>
    </div>
      
    <div className={`p-4 rounded-2xl shadow-sm flex flex-col items-center ${devices.lightIntensity ? 'bg-[#7c4dff]' : 'bg-white'}`}>
      <div className="flex justify-between w-full mb-2">
        <span className={`text-lg font-medium ${devices.lightIntensity ? 'text-white' : 'text-gray-500'}`}>
          {devices.lightIntensity ? 'ON' : 'OFF'}
        </span>
        <ToggleSwitch isOn={devices.lightIntensity} onToggle={() => onToggleDevice('lightIntensity', !devices.lightIntensity)} />
      </div>
      <div className="w-12 h-12 flex items-center justify-center my-2">
        <span className={`w-8 h-8 ${devices.lightIntensity ? 'text-white' : 'text-[#7c4dff]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <LightIntensityIcon/>
        </span>
      </div>
      <span className={`mt-2 text-lg font-medium ${devices.lightIntensity ? 'text-white' : 'text-[#7c4dff]'}`}>
        Light Intensity
      </span>
    </div>

    </div>
  );
};

export default DeviceControls;
