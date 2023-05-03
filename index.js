function climbingLeaderboard(ranked, players) {
  const uniqueRanked = [...new Set(ranked)];
  const result = [];
  let i = uniqueRanked.length - 1;

  players.forEach((player) => {
    while (i >= 0 && uniqueRanked[i] <= player) {
      i--;
    }
    result.push(i + 2);
  });

  return result;
}

ranked = [100, 100, 50, 40, 40, 20, 10];
player = [5, 25, 50, 120];
console.log(climbingLeaderboard(ranked, player));
console.log('6-4-2-1');
