import React from 'react';

const Achievements = ({ achievements }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
    {achievements.map((achievement, index) => (
      <div key={index} className="tech-card group text-center">
        <div className={`inline-flex p-3 rounded-xl bg-${achievement.color}-500/10 text-${achievement.color}-400 border border-${achievement.color}-500/20 group-hover:scale-110 transition-transform mb-4`}>
          <achievement.icon size={24} aria-hidden="true" />
        </div>
        <div className="text-3xl font-bold text-white mb-2">{achievement.count}</div>
        <div className="text-gray-400">{achievement.label}</div>
      </div>
    ))}
  </div>
);

export default Achievements; 