
export type Player = {
    id: number;
    name: string;
    stats: {
      batting: { runs: number; average: number; strikeRate: number };
      bowling: { wickets: number; economy: number; average: number };
      careerProgression: { year: number; runs: number }[];
    };
  };
  
  export const players: Player[] = [
    {
      id: 1,
      name: "Virat Kohli",
      stats: {
        batting: { runs: 13848, average: 58.67, strikeRate: 93.79 },
        bowling: { wickets: 4, economy: 6.22, average: 166.25 },
        careerProgression: [
          { year: 2016, runs: 973 }, { year: 2017, runs: 1460 },
          { year: 2018, runs: 1202 }, { year: 2019, runs: 1377 },
          { year: 2022, runs: 781 }, { year: 2023, runs: 1377 },
        ],
      },
    },
    {
      id: 2,
      name: "Virat Kohli",
      stats: {
        batting: { runs: 13848, average: 58.67, strikeRate: 93.79 },
        bowling: { wickets: 4, economy: 6.22, average: 166.25 },
        careerProgression: [
          { year: 2016, runs: 973 }, { year: 2017, runs: 1460 },
          { year: 2018, runs: 1202 }, { year: 2019, runs: 1377 },
          { year: 2022, runs: 781 }, { year: 2023, runs: 1377 },
        ],
      },
    },
    {
      id: 3,
      name: "Virat Kohli",
      stats: {
        batting: { runs: 13848, average: 58.67, strikeRate: 93.79 },
        bowling: { wickets: 4, economy: 6.22, average: 166.25 },
        careerProgression: [
          { year: 2016, runs: 973 }, { year: 2017, runs: 1460 },
          { year: 2018, runs: 1202 }, { year: 2019, runs: 1377 },
          { year: 2022, runs: 781 }, { year: 2023, runs: 1377 },
        ],
      },
    },
    {
      id: 4,
      name: "Virat Kohli",
      stats: {
        batting: { runs: 13848, average: 58.67, strikeRate: 93.79 },
        bowling: { wickets: 4, economy: 6.22, average: 166.25 },
        careerProgression: [
          { year: 2016, runs: 973 }, { year: 2017, runs: 1460 },
          { year: 2018, runs: 1202 }, { year: 2019, runs: 1377 },
          { year: 2022, runs: 781 }, { year: 2023, runs: 1377 },
        ],
      },
    },
    {
      id: 5,
      name: "Virat Kohli",
      stats: {
        batting: { runs: 13848, average: 58.67, strikeRate: 93.79 },
        bowling: { wickets: 4, economy: 6.22, average: 166.25 },
        careerProgression: [
          { year: 2016, runs: 973 }, { year: 2017, runs: 1460 },
          { year: 2018, runs: 1202 }, { year: 2019, runs: 1377 },
          { year: 2022, runs: 781 }, { year: 2023, runs: 1377 },
        ],
      },
    },
    // ... add 2-3 more players like Rohit Sharma, Jasprit Bumrah, etc.
  ];