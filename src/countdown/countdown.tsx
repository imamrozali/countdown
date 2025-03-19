import { useEffect, useState, useRef, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const thanksAudioRef = useRef<HTMLAudioElement>(null);
  const musicAudioRef = useRef<HTMLAudioElement>(null);
  const [showMessage, setShowMessage] = useState(false);

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();

    if (difference <= 0) return {};

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(
      (difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    );
    const days = Math.floor(
      (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { years, months, days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Fragment>
      <title>Thanks Sandy Setyanagara & Reynaldi Septian Dwiyanto </title>
      <div className="flex flex-col items-center space-y-4 bg-black text-green-500 p-4 rounded-lg">
        <audio
          ref={thanksAudioRef}
          preload="auto"
          onEnded={() => musicAudioRef.current?.play()}
        >
          <source src="/audio/thanks.wav" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio ref={musicAudioRef} loop preload="auto">
          <source src="/audio/music.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div className="border border-green-500 p-4 w-full rounded-lg font-mono bg-black text-green-500">
          <div className="w-[10rem]">
            <div className="typewriter text-[2.5rem] animation-delay-0">
              rm -rf{" "}
            </div>
          </div>
          <div className="w-[12.5rem]">
            <div className="typewriter text-[1rem] animation-delay-2">
              1. sandy setyanagara
            </div>
          </div>
          <div className="w-[17.2rem]">
            <div className="typewriter text-[1rem] animation-delay-4">
              2. reynaldi septian dwiyanto
            </div>
          </div>
          <div className="w-[38rem]">
            {showMessage && (
              <div className="mt-4 typewriter text-left text-green-500 animation-delay-11">
                Big thanks buat Sandy Setyanagara & Reynaldi Septian Dwiyanto!
              </div>
            )}
          </div>
          <div className="w-[36.2rem]">
            {showMessage && (
              <div className="mt-1 typewriter text-left text-green-500 animation-delay-12">
                Kalian tuh nggak cuma rekan kerja, tapi bener-bener fondasi
              </div>
            )}
          </div>
          <div className="w-[36.8rem]">
            {showMessage && (
              <div className="mt-1 typewriter text-left text-green-500 animation-delay-13">
                yang bikin semuanya jalan dengan baik. Nggak tahu deh gimana
              </div>
            )}
          </div>
          <div className="w-[36rem]">
            {showMessage && (
              <div className="mt-1 typewriter text-left text-green-500 animation-delay-14">
                jadinya tanpa kalian. Sukses terus ya, kalian keren banget!
              </div>
            )}
          </div>

          <button
            className="mt-4 disabled:opacity-[0.4] disabled:cursor-not-allowed px-2 py-1 cursor-pointer hover:scale-105 bg-green-500 text-black rounded-md"
            onClick={() => {
              if (thanksAudioRef.current) {
                thanksAudioRef.current.play().catch((err) => {
                  console.error("Failed to play audio:", err);
                });
              }
              setShowMessage(true);
            }}
            disabled={showMessage}
          >
            run
          </button>
        </div>
        <div className="flex space-x-4 text-center text-[8rem] font-mono">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={value}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-[12rem] h-[12rem] bg-black text-green-500 flex items-center justify-center rounded-lg border border-green-500"
                >
                  {value}
                </motion.div>
              </AnimatePresence>
              <span className="text-sm uppercase mt-2">{unit}</span>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Countdown;
