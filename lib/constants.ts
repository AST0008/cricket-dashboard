// Player data
export const players = [
  {
    id: 1,
    name: "Virat Kohli",
    country: "India",
    role: "Right-Handed Batsman",
    matches: 593,
    runs: 27314,
    average: 58.07,
    centuries: 70,
    highestScore: "254*",
    image: "/vk.jpeg",
    teamLogo: "🇮🇳",
    jersey: 18,
    battingStyle: "Right-handed",
    initials: "VK",    
    stats: {
      batting: { runs: 13848, average: 58.67, strikeRate: 93.79 },
      bowling: { wickets: 4, economy: 6.22, average: 166.25 },
      careerProgression: [
        { year: 2016, runs: 973 },
        { year: 2017, runs: 1460 },
        { year: 2018, runs: 1202 },
        { year: 2019, runs: 1377 },
        { year: 2020, runs: 1048 },
        { year: 2021, runs: 1084 },
        { year: 2022, runs: 1073 },
        { year: 2023, runs: 1195 },
        { year: 2024, runs: 1001 },
      ],
    },
  },
  {
    id: 2,
    name: "Babar Azam",
    country: "Pakistan",
    role: "Right-Handed Batsman",
    matches: 278,
    runs: 12845,
    average: 56.83,
    centuries: 31,
    highestScore: "196",
    image: "/babar.jpeg",
    teamLogo: "🇵🇰",
    jersey: 56,
    initials: "BA",
    battingStyle: "Right-handed",
    stats: {
      batting: { runs: 13848, average: 58.67, strikeRate: 93.79 },
      bowling: { wickets: 4, economy: 6.22, average: 166.25 },
      careerProgression: [
        { year: 2016, runs: 973 },
        { year: 2017, runs: 1460 },
        { year: 2018, runs: 1202 },
        { year: 2019, runs: 1377 },
        { year: 2020, runs: 1048 },
        { year: 2021, runs: 1084 },
        { year: 2022, runs: 1073 },
        { year: 2023, runs: 1195 },
        { year: 2024, runs: 1001 },
      ],
    },
  },
  {
    id: 3,
    name: "Steve Smith",
    initials: "SS",
    country: "Australia",
    role: "Right-Handed Batsman",
    matches: 352,
    runs: 17162,
    average: 61.8,
    centuries: 43,
    highestScore: "239",
    image: "/steve.jpeg",
    teamLogo: "🇦🇺",
    jersey: 49,
    battingStyle: "Right-handed",
    stats: {
      batting: { runs: 13848, average: 58.67, strikeRate: 93.79 },
      bowling: { wickets: 4, economy: 6.22, average: 166.25 },
      careerProgression: [
        { year: 2016, runs: 973 },
        { year: 2017, runs: 1460 },
        { year: 2018, runs: 1202 },
        { year: 2019, runs: 1377 },
        { year: 2020, runs: 1048 },
        { year: 2021, runs: 1084 },
        { year: 2022, runs: 1073 },
        { year: 2023, runs: 1195 },
        { year: 2024, runs: 1001 },
      ],
    },
  },
  {
    id: 4,
    name: "Kane Williamson",  
    initials: "KW",
    country: "New Zealand",
    role: "Right-Handed Batsman",
    matches: 234,
    runs: 11358,
    average: 54.31,
    centuries: 32,
    highestScore: "251",
    image: "/kane.jpeg",
    teamLogo: "🇳🇿",
    jersey: 22,
    battingStyle: "Right-handed",
    stats: {
      batting: { runs: 13848, average: 58.67, strikeRate: 93.79 },
      bowling: { wickets: 4, economy: 6.22, average: 166.25 },
      careerProgression: [
        { year: 2016, runs: 973 },
        { year: 2017, runs: 1460 },
        { year: 2018, runs: 1202 },
        { year: 2019, runs: 1377 },
        { year: 2020, runs: 1048 },
        { year: 2021, runs: 1084 },
        { year: 2022, runs: 1073 },
        { year: 2023, runs: 1195 },
        { year: 2024, runs: 1001 },
      ],
    },
  },
  {
    id: 5,
    name: "Joe Root",
    initials: "JR",
    country: "England",
    role: "Right-Handed Batsman",
    matches: 287,
    runs: 14116,
    average: 49.44,
    centuries: 34,
    highestScore: "254",
    image: "/joe.jpeg",
    teamLogo: "🇬🇧",
    jersey: 66,
    battingStyle: "Right-handed",
    stats: {
      batting: { runs: 13848, average: 58.67, strikeRate: 93.79 },
      bowling: { wickets: 4, economy: 6.22, average: 166.25 },
      careerProgression: [
        { year: 2016, runs: 973 },
        { year: 2017, runs: 1460 },
        { year: 2018, runs: 1202 },
        { year: 2019, runs: 1377 },
        { year: 2020, runs: 1048 },
        { year: 2021, runs: 1084 },
        { year: 2022, runs: 1073 },
        { year: 2023, runs: 1195 },
        { year: 2024, runs: 1001 },
      ],
    },
  },
];

// Team roster data
export const teamRoster = [
  {
    name: "Rohit Sharma",
    role: "Right-Handed Batsman",
    image: "RS",
    initials: "RS",
    jersey: 45,
  },
  {
    name: "Shikhar Dhawan",
    role: "Left-Handed Batsman",
    image: "SD",
    initials: "SD",
    jersey: 25,
  },
  {
    name: "Shreyas Iyer",
    role: "Right-Handed Batsman",
    image: "SI",
    initials: "SI",
    jersey: 41,
  },
  { name: "KL Rahul", role: "Right-Handed Batsman", image: "KR", initials: "KR", jersey: 1 },
  { name: "Hardik Pandya", role: "All Rounder", image: "HP", initials: "HP", jersey: 33 },
  { name: "Ravindra Jadeja", role: "All Rounder", image: "RJ", initials: "RJ", jersey: 8 },
  { name: "Rishabh Pant", role: "Wicket-Keeper", image: "RP", initials: "RP", jersey: 17 },
  { name: "Jasprit Bumrah", role: "Right-arm Bowler", image: "JB", jersey: 93 },
];

// Partnership data
export const partnerships = [
  { name: "Rohit Sharma", runs: 3547, matches: 87, image: "RS", initials: "RS" },
  { name: "Shikhar Dhawan", runs: 4154, matches: 115, image: "SD", initials: "SD"  },
  { name: "KL Rahul", runs: 2156, matches: 51, image: "KR", initials: "KR" },
];

// Performance data
export const performanceData = [
  { match: "Avg", value: 58.07, teamAvg: 42.5 },
  { match: "Match 1", value: 52, teamAvg: 38 },
  { match: "Match 2", value: 78, teamAvg: 45 },
  { match: "Match 3", value: 102, teamAvg: 52 },
];

// Recent matches with world map visualization
export const recentMatches = [
  { country: "India", matches: 17, color: "#F59E0B" },
  { country: "Australia", matches: 8, color: "#3B82F6" },
  { country: "South Africa", matches: 4, color: "#10B981" },
  { country: "England", matches: 12, color: "#EF4444" },
];

// Enhanced dummy data for various charts
export const battingFormData = [
  { month: "Jan", runs: 450, balls: 320, strikeRate: 140.6, avg: 45.0 },
  { month: "Feb", runs: 380, balls: 280, strikeRate: 135.7, avg: 38.0 },
  { month: "Mar", runs: 520, balls: 380, strikeRate: 136.8, avg: 52.0 },
  { month: "Apr", runs: 480, balls: 350, strikeRate: 137.1, avg: 48.0 },
  { month: "May", runs: 600, balls: 420, strikeRate: 142.9, avg: 60.0 },
  { month: "Jun", runs: 420, balls: 300, strikeRate: 140.0, avg: 42.0 },
];

export const bowlingStatsData = [
  { name: "Pace", value: 85, color: "#FF6B6B" },
  { name: "Spin", value: 65, color: "#4ECDC4" },
  { name: "Accuracy", value: 92, color: "#45B7D1" },
  { name: "Economy", value: 78, color: "#96CEB4" },
  { name: "Wickets", value: 88, color: "#FFEAA7" },
];

export const teamPerformanceData = [
  { team: "RCB", wins: 8, losses: 6, points: 16, nrr: 0.156 },
  { team: "MI", wins: 6, losses: 8, points: 12, nrr: -0.234 },
  { team: "CSK", wins: 9, losses: 5, points: 18, nrr: 0.289 },
  { team: "KKR", wins: 7, losses: 7, points: 14, nrr: 0.045 },
  { team: "DC", wins: 5, losses: 9, points: 10, nrr: -0.456 },
  { team: "SRH", wins: 10, losses: 4, points: 20, nrr: 0.378 },
];

export const seasonComparisonData = [
  { year: "2021", runs: 405, matches: 15, avg: 27.0, sr: 125.5 },
  { year: "2022", runs: 523, matches: 16, avg: 34.9, sr: 131.2 },
  { year: "2023", runs: 639, matches: 14, avg: 45.6, sr: 139.8 },
  { year: "2024", runs: 741, matches: 15, avg: 49.4, sr: 142.3 },
];

export const venuePerformanceData = [
  {
    venue: "Chinnaswamy",
    runs: 1200,
    matches: 8,
    avg: 150.0,
    color: "#FF6B6B",
  },
  { venue: "Wankhede", runs: 950, matches: 6, avg: 158.3, color: "#4ECDC4" },
  {
    venue: "Eden Gardens",
    runs: 800,
    matches: 5,
    avg: 160.0,
    color: "#45B7D1",
  },
  { venue: "Chepauk", runs: 1100, matches: 7, avg: 157.1, color: "#96CEB4" },
  {
    venue: "Rajiv Gandhi",
    runs: 750,
    matches: 4,
    avg: 187.5,
    color: "#FFEAA7",
  },
];

export const powerplayData = [
  { over: "1-2", runs: 45, balls: 12, sr: 375.0, boundaries: 8 },
  { over: "3-4", runs: 38, balls: 12, sr: 316.7, boundaries: 6 },
  { over: "5-6", runs: 42, balls: 12, sr: 350.0, boundaries: 7 },
];

export const deathOversData = [
  { over: "16-17", runs: 35, balls: 12, sr: 291.7, boundaries: 5 },
  { over: "18-19", runs: 28, balls: 12, sr: 233.3, boundaries: 4 },
  { over: "20", runs: 22, balls: 6, sr: 366.7, boundaries: 3 },
];

export const playerComparisonData = [
  {
    name: "Virat Kohli",
    runs: 741,
    avg: 49.4,
    sr: 142.3,
    sixes: 28,
    fours: 89,
  },
  {
    name: "Rohit Sharma",
    runs: 654,
    avg: 43.6,
    sr: 138.9,
    sixes: 35,
    fours: 76,
  },
  { name: "KL Rahul", runs: 598, avg: 39.9, sr: 135.2, sixes: 22, fours: 82 },
  {
    name: "Shubman Gill",
    runs: 612,
    avg: 40.8,
    sr: 141.1,
    sixes: 31,
    fours: 78,
  },
];

export const matchTimelineData = [
  { over: 1, runs: 8, wickets: 0, required: 200 },
  { over: 5, runs: 45, wickets: 0, required: 155 },
  { over: 10, runs: 89, wickets: 1, required: 111 },
  { over: 15, runs: 134, wickets: 2, required: 66 },
  { over: 20, runs: 198, wickets: 3, required: 2 },
];

export const heatmapData = [
  { zone: "Off-side", runs: 45, balls: 120, sr: 37.5 },
  { zone: "Leg-side", runs: 38, balls: 95, sr: 40.0 },
  { zone: "Straight", runs: 42, balls: 110, sr: 38.2 },
  { zone: "Square", runs: 28, balls: 80, sr: 35.0 },
];
