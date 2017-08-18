Problem #1:

SELECT matchid, player FROM goal
WHERE teamid = 'GER';

Problem #2:

SELECT id,stadium,team1,team2
FROM game
WHERE id = 1012;

Problem #3:

SELECT player, teamid, stadium, mdate
FROM game 
JOIN goal ON (id=matchid AND teamid = 'GER');

Problem #4:

SELECT team1, team2, player
FROM game
JOIN goal ON (id=matchid AND player LIKE 'Mario%');

Problem #5:

SELECT player, teamid, coach, gtime
FROM goal JOIN eteam on teamid=id
WHERE gtime<=10

Problem #6:



Problem #7:

Problem #8:

Problem #9:

Problem #10:

Problem #11:

Problem #12:

Problem #13: