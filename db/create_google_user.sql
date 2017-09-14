INSERT INTO users
(userid, firstname)
values ($1, $2)
RETURNING userid, firstname
