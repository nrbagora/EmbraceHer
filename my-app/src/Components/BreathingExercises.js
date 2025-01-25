import React, { useState, useCallback, useEffect } from 'react';
import './BreathingExercises.css';

const BreathingExercises = () => {
  const breathingPhases4_7_8 = [
    { label: 'Inhale', duration: 4 },
    { label: 'Hold', duration: 7 },
    { label: 'Exhale', duration: 8 },
  ];

  const breathingPhasesBox = [
    { label: 'Inhale', duration: 4 },
    { label: 'Hold', duration: 4 },
    { label: 'Exhale', duration: 4 },
    { label: 'Wait', duration: 4 },
  ];

  const [currentPhase, setCurrentPhase] = useState(0);
  const [breathingPhases, setBreathingPhases] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [activeSides, setActiveSides] = useState([]); // Tracks which sides are active

  const handleNextPhase = useCallback(() => {
    if (currentPhase < breathingPhases.length - 1) {
      setCurrentPhase((prevPhase) => prevPhase + 1);
      setTimeRemaining(breathingPhases[currentPhase + 1].duration);
      setActiveSides((prev) => [...prev, currentPhase]); // Highlight the next side
    } else {
      setCurrentPhase(0); // Reset to the first phase
      setIsRunning(false); // Stop the cycle
      setActiveSides([0, 1, 2, 3]); // Highlight all sides for completion
    }
  }, [currentPhase, breathingPhases]);

  useEffect(() => {
    if (isRunning && timeRemaining > 0) {
      const timer = setTimeout(() => setTimeRemaining((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isRunning && timeRemaining === 0) {
      handleNextPhase();
    }
  }, [timeRemaining, isRunning, handleNextPhase]);

  const start4_7_8Breathing = () => {
    setBreathingPhases(breathingPhases4_7_8);
    setCurrentPhase(0);
    setTimeRemaining(breathingPhases4_7_8[0].duration);
    setActiveSides([]); // Reset sides
    setIsRunning(true);
  };

  const startBoxBreathing = () => {
    setBreathingPhases(breathingPhasesBox);
    setCurrentPhase(0);
    setTimeRemaining(breathingPhasesBox[0].duration);
    setActiveSides([]); // Reset sides
    setIsRunning(true);
  };

  const renderBoxTimer = () => (
    <div className="box-timer">
      <div className={`side top ${activeSides.includes(0) ? 'active' : ''}`}></div>
      <div className={`side right ${activeSides.includes(1) ? 'active' : ''}`}></div>
      <div className={`side bottom ${activeSides.includes(2) ? 'active' : ''}`}></div>
      <div className={`side left ${activeSides.includes(3) ? 'active' : ''}`}></div>
    </div>
  );

  const renderTriangleTimer = () => (
    <div className="triangle-timer">
      <div className={`side base ${activeSides.includes(0) ? 'active' : ''}`}></div>
      <div className={`side left ${activeSides.includes(1) ? 'active' : ''}`}></div>
      <div className={`side right ${activeSides.includes(2) ? 'active' : ''}`}></div>
    </div>
  );

  return (
    <div className="breathing-container">
      <h2>Breathing Exercises</h2>
      <div className="breathing-buttons">
        <button
          className="breathing-button"
          onClick={start4_7_8Breathing}
          disabled={isRunning}
        >
          4-7-8 Breathing
        </button>
        <button
          className="breathing-button"
          onClick={startBoxBreathing}
          disabled={isRunning}
        >
          Box Breathing
        </button>
      </div>
      {isRunning && (
        <>
          <div className="phase-display">
            {breathingPhases[currentPhase]?.label}
          </div>
          <div className="timer-container">
            {breathingPhases.length === 3 ? renderTriangleTimer() : renderBoxTimer()}
          </div>
          <div className="timer-circle">
            <span className="timer-number">{timeRemaining}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default BreathingExercises;
