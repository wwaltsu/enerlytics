TRUNCATE TABLE power_stations RESTART IDENTITY;

INSERT INTO power_stations(name, status) VALUES
  ('Solar Power Station Alpha', 'OK'),
  ('Wind Farm Beta', 'Warning');