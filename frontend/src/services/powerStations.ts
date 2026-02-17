import axios from 'axios';
import type { PowerStation } from '../schemas/PowerStationSchema';

export const getAll = async (): Promise<PowerStation[]> => {
  const response = await axios.get<PowerStation[]>('/api/powerstations');
  return response.data;
};

export const remove = async (id: number) => {
  await axios.delete(`/api/powerstations/${id}`);
};

export const update = async (
  id: number,
  updatedPowerStation: { name: string; status: string },
) => {
  const res = await axios.put(`/api/powerstations/${id}`, updatedPowerStation);
  return res.data as PowerStation;
};

export const create = async (newPowerStation: {
  name: string;
  status: string;
}): Promise<PowerStation> => {
  const res = await axios.post('api/powerstations', newPowerStation);
  return res.data as PowerStation;
};
