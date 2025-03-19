import Countdown from "./countdown";

const CountdownComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <Countdown targetDate="2025-03-21 18:00:00" />
    </div>
  );
};

export default CountdownComponent;
