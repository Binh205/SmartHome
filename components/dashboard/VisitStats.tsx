import React from 'react';
import { VisitStats as VisitStatsType } from '../../models/interfaces/stats';

interface VisitStatsProps {
  stats: VisitStatsType;
}

const VisitStats: React.FC<VisitStatsProps> = ({ stats }) => {
  const { visits, growthPercentage } = stats;
  
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-gray-500 text-sm">Statistics</h3>
      <h2 className="text-xl font-semibold mb-2 text-[#242424]">Total visits</h2>
      
      <div className="flex items-end mt-2">
        <div className="text-4xl font-bold text-[#242424]">{visits}</div>
        <div className="ml-2 text-green-500 text-sm font-medium">+{growthPercentage}%</div>
        <svg className="w-4 h-4 text-green-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
        </svg>
      </div>
      
      <div className="mt-4 h-16">
        <svg className="w-full h-full text-green-500" viewBox="0 0 100 20">
          <path d="M0,10 L10,12 L20,8 L30,9 L40,5 L50,15 L60,7 L70,10 L80,8 L90,11 L100,10" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default VisitStats;
