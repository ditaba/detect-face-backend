BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined) values ('Jessie', 'xditaba@gmail.com', 5, '2020-01-01');
INSERT into login (hash, email) values ('$2a$10$YKPWNYP7o0kk1gPkW1MGTuhdvlcuvKmG4Lh7d/LpU2/pGKCUB5XcS', 'xditaba@gmail.com');

COMMIT;
