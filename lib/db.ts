import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


// Dummy player data
export const players = [
  { id: 1, name: "Virat Kohli", country: "India", role: "Batsman", matches: 254, runs: 12344, average: 58.07, centuries: 43 },
  { id: 2, name: "Babar Azam", country: "Pakistan", role: "Batsman", matches: 102, runs: 4442, average: 56.83, centuries: 17 },
  { id: 3, name: "Steve Smith", country: "Australia", role: "Batsman", matches: 131, runs: 7540, average: 61.80, centuries: 27 },
  { id: 4, name: "Kane Williamson", country: "New Zealand", role: "Batsman", matches: 87, runs: 6173, average: 54.31, centuries: 24 },
  { id: 5, name: "Jasprit Bumrah", country: "India", role: "Bowler", matches: 98, wickets: 143, average: 22.75, centuries: 0 },
];

// Dummy performance data
export const performanceData = [
  { month: 'Jan', runs: 420, wickets: 8, average: 52.5, strikeRate: 89.2 },
  { month: 'Feb', runs: 380, wickets: 12, average: 47.5, strikeRate: 91.8 },
  { month: 'Mar', runs: 520, wickets: 15, average: 65.0, strikeRate: 95.4 },
  { month: 'Apr', runs: 450, wickets: 10, average: 56.3, strikeRate: 88.7 },
  { month: 'May', runs: 680, wickets: 18, average: 75.6, strikeRate: 102.3 },
  { month: 'Jun', runs: 590, wickets: 14, average: 67.2, strikeRate: 98.1 },
];

export const careerData = [
  { year: '2018', runs: 1202, average: 55.3, centuries: 6 },
  { year: '2019', runs: 1377, average: 61.2, centuries: 5 },
  { year: '2020', runs: 618, average: 26.9, centuries: 1 },
  { year: '2021', runs: 765, average: 28.3, centuries: 1 },
  { year: '2022', runs: 1183, average: 49.3, centuries: 3 },
  { year: '2023', runs: 1377, average: 66.0, centuries: 6 },
];

export const formatData = [
  { name: 'Test', runs: 8043, average: 49.95, color: '#8884d8' },
  { name: 'ODI', runs: 12344, average: 58.07, color: '#82ca9d' },
  { name: 'T20I', runs: 3712, average: 52.73, color: '#ffc658' },
];
