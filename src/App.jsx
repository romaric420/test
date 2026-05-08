import { useState } from 'react';
import Welcome from './components/Welcome';
import Test from './components/Test';
import Correction from './components/Correction';

export default function App() {
  // Phases : 'welcome' | 'test' | 'correction'
  const [phase, setPhase] = useState('welcome');
  const [userName, setUserName] = useState('');
  const [answers, setAnswers] = useState({});

  const handleStart = (name) => {
    setUserName(name);
    setAnswers({});
    setPhase('test');
  };

  const handleFinish = () => {
    setPhase('correction');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setUserName('');
    setAnswers({});
    setPhase('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="grain min-h-screen">
      {phase === 'welcome' && (
        <Welcome onStart={handleStart} />
      )}

      {phase === 'test' && (
        <Test
          userName={userName}
          answers={answers}
          setAnswers={setAnswers}
          onFinish={handleFinish}
        />
      )}

      {phase === 'correction' && (
        <Correction
          userName={userName}
          answers={answers}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
