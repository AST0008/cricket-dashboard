interface PlayerAvatarProps {
  player: string | { image: string; jersey?: number };
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showJersey?: boolean;
}

export const PlayerAvatar = ({ player, size = 'md', showJersey = false }: PlayerAvatarProps) => {
  const sizeClasses: Record<string, string> = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg',
    xl: 'w-24 h-24 text-2xl'
  };

  return (
    <div className="relative">
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-bold text-white shadow-lg`}>
        {typeof player === 'string' ? player : player.image}
      </div>
      {showJersey && typeof player === 'object' && (
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold text-black">
          {player.jersey}
        </div>
      )}
    </div>
  );
};
