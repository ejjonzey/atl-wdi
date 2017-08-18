Query #1: SELECT name FROM teams;

Query #2: SELECT stadium, head_coach FROM teams WHERE conference = 'NFC';

Query #3: SELECT head_coach FROM teams WHERE conference = 'AFC' AND division = 'South';

Query #4: SELECT COUNT(*) FROM players;

Query #5: SELECT name, head_coach FROM teams WHERE conference = 'AFC' OR conference = 'NFC' AND division = 'North' OR division = 'East';

Query #6: SELECT * FROM players ORDER BY salary DESC LIMIT 50;

Query #7: SELECT AVG(salary) FROM players;

Query #8: SELECT name, position FROM players WHERE salary > 10000000;
