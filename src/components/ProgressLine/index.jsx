import React from "react";

export default function ProgressLine ({ label, percentage, barBg, progressBg, barHeight }) {
  const [widths, setWidths] = React.useState(0);

  React.useEffect(() => {
    requestAnimationFrame(() => setWidths(percentage));
  }, [percentage]);

  return (
    <section >
      <span className="progress-line-label">{label}</span>
      <div
        className="progress-line-outer"
        style={{
          background: barBg,
          height: `${barHeight}px`,
        }}
      >
        <div
          style={{
            width: widths,
            background: progressBg,
            transition: "width 2s",
          }}
        />
      </div>
    </section>
  );
};
