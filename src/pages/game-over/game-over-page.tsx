import {
  gameEndings,
  useGameSessionStore,
  useResetGameSession,
} from '@/entities/game-session';

import { LanguageSwitcher } from '@/features/language-switcher';
import { GameOverCard } from '@/widgets/game-over-card';
import { ResourcePanel } from '@/widgets/resources-panel';

import { Navigate, useNavigate } from 'react-router';

export const GameOverPage = () => {
  const navigate = useNavigate();

  const resetGameSession = useResetGameSession();

  const handleRestart = () => {
    resetGameSession();

    navigate('/game');
  };

  const gameOverReason = useGameSessionStore((state) => state.gameOverReason);

  const year = useGameSessionStore((state) => state.year);

  if (!gameOverReason) {
    return <Navigate to="/" replace />;
  }

  const ending = gameEndings[gameOverReason];

  return (
    <main className="h-dvh overflow-hidden px-2 py-3 sm:px-4">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col gap-3">
        <LanguageSwitcher />
        <ResourcePanel />
        <GameOverCard
          titleKey={ending.titleKey}
          descriptionKey={ending.descriptionKey}
          image={ending.image}
          year={year}
          onRestart={handleRestart}
        />
      </div>
    </main>
  );
};
