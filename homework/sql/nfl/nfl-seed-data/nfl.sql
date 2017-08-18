Query #1: SELECT name FROM teams;

Query #2: SELECT stadium, head_coach FROM teams WHERE conference = 'NFC';

Query #3: SELECT head_coach FROM teams WHERE conference = 'AFC' AND division = 'South';

Query #4: SELECT COUNT(*) FROM players;

Query #5: SELECT name, head_coach FROM teams WHERE conference = 'AFC' OR conference = 'NFC' AND division = 'North' OR division = 'East';

Query #6: SELECT * FROM players ORDER BY salary DESC LIMIT 50;

Query #7: SELECT AVG(salary) FROM players;

Query #8: SELECT name, position FROM players WHERE salary > 10000000;

Query #9: SELECT * FROM players ORDER BY salary DESC LIMIT 1;

Query #10: SELECT name, position FROM players ORDER BY salary ASC LIMIT 100;

Query #11: SELECT AVG(salary) FROM players WHERE position = 'DE';

Query #12: SELECT * FROM players WHERE team_id = '1';

Query #13: SELECT SUM(salary) FROM players WHERE team_id = '18';

Query #14: SELECT name FROM players WHERE team_id = '23' ORDER BY salary ASC LIMIT 1;