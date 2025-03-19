import Countdown from "./countdown";

const CountdownComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <Countdown targetDate="2025-12-31 23:59:59" />
    </div>
  );
};

export default CountdownComponent;
