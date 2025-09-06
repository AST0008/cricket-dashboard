
"use client";

import { useState } from "react";
import { Command, CommandInput, CommandList, CommandItem, CommandEmpty } from "@/components/ui/command";
import { players, Player } from "@/lib/data";

interface PlayerSearchProps {
  onPlayerSelect: (player: Player) => void;
}

export function PlayerSearch({ onPlayerSelect }: PlayerSearchProps) {
  const [open, setOpen] = useState(false);

  return (
    <Command className="rounded-lg border shadow-md max-w-sm mx-auto">
      <CommandInput placeholder="Search for a player..." onFocus={() => setOpen(true)} />
      {open && (
        <CommandList>
          <CommandEmpty>No player found.</CommandEmpty>
          {players.map((player) => (
            <CommandItem
              key={player.id}
              onSelect={() => {
                onPlayerSelect(player);
                setOpen(false);
              }}
              className="cursor-pointer"
            >
              {player.name}
            </CommandItem>
          ))}
        </CommandList>
      )}
    </Command>
  );
}