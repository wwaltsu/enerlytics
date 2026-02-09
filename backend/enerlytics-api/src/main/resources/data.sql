TRUNCATE TABLE sites RESTART IDENTITY;

INSERT INTO sites(name, status) VALUES
  ('Solar Plant Alpha', 'OK'),
  ('Wind Farm Beta', 'Warning');