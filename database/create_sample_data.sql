-- -- USERS
INSERT INTO users
  (username, email, created_at)
VALUES
  ('Jonathan_Dombrowski', 'j@j.com', '2017-02-16 18:22:10.846'),
  ('Kaylee_Moser', 'k@m.com', '2017-04-02 17:11:21.417'),
  ('Melanie_Peluso', 'm@p.com', '2017-02-21 11:12:32.574'),
  ('Lola_Doggam', 'l@d.com', '2016-08-13 01:28:43.085'),
  ('Petey_Doggam', 'p@d.com', '2016-12-07 01:04:39.298'),
  ('Bob_Burger', 'b@b.com', '2017-04-30 13:26:14.496'),
  ('Bear_Stuffins', 'b@s.com', '2016-12-12 06:50:07.996'),
  ('Morgan_Scahumber', 'm@s.com', '2016-08-20 02:19:45.512'),
  ('Alec696969', 'A@69.com', '2016-06-24 19:36:30.978');

-- Plants 
INSERT INTO plants
  (created_at, light_requirement, location_preference, name, type, user_id)
VALUES
  ('2017-02-16 18:22:10.846', "Bright Indirect", "Indoor", "Zuko", "Monstera Deliciousa", 1),
  ('2017-02-17 18:22:10.846', "Bright Indirect", "Indoor", "Azula", "Monstera Deliciousa", 2),
  ('2017-02-17 18:22:10.846', "Bright Indirect", "Indoor", "Iroh", "Chinese EverGreen", 1),
  ('2017-02-17 18:22:10.846', "Bright Indirect", "Indoor", "Toph", "Zanziveria", 2),
  ('2017-02-17 18:22:10.846', "Full Sun", "Outdoor", "Sokka", "Cherry Tomato", 1),
  ('2017-02-17 18:22:10.846', "Full Sun", "Outdoor", "Momo", "Heirloom Tomato", 2);

INSERT INTO comments
  (comment_text, photo_id, plant_id, user_id)
VALUES
  ( "New leaf starting to unfurl", null, 1, 1),
  ("2 New leaves starting to unfurl, still dry. Ready for propagation for Melanie", null, 2, 1)  