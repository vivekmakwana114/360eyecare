import React from 'react';

/**
 * GuideKeyTakeaways component displays a list of summary points
 * for a specific guide in a styled box.
 * 
 * @param {Object} props
 * @param {string[]} props.takeaways - Array of takeaway strings.
 */
const GuideKeyTakeaways = ({ takeaways }) => {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 my-4 sm:my-6">
      <div className="bg-blue-50/50 p-6 sm:p-8 rounded-2xl border border-blue-100">
        <h3 className="text-xl font-bold text-combination-200 mb-4">
          Key Takeaways
        </h3> 
        <ul className="space-y-4">
          {takeaways.map((point, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-combination-100 mt-1 flex-shrink-0 animate-pulse-slow">•</span>
              <p className="text-neutral-600 leading-relaxed">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GuideKeyTakeaways;
