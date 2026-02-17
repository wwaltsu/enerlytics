import { useEffect, useState } from 'react';
import PowerStationForm from './components/PowerStationForm';
import { powerStationSchema } from './schemas/PowerStationSchema';
import { getAll, remove, update, create } from './services/powerStations';
import PowerStationList from './components/PowerStationsList';

type PowerStation = {
  id: number;
  name: string;
  status: string;
};

function App() {
  const [powerStations, setPowerStations] = useState<PowerStation[]>([]);
  const [powerStationName, setPowerStationName] = useState('');
  const [powerStationStatus, setPowerStationStatus] = useState('');

  const handleAddPowerStation = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newPowerStation = {
      name: powerStationName,
      status: powerStationStatus,
    };

    const results = powerStationSchema.safeParse({ id: 1, ...newPowerStation });
    if (!results.success) {
      alert(results.error.issues.map((e) => e.message).join('\n'));
      return;
    }

    try {
      const created = await create(newPowerStation);
      setPowerStations((prev) => [...prev, created]);
      setPowerStationName('');
      setPowerStationStatus('');
    } catch (err) {
      console.error('Failed to create powerStation:', err);
    }
  };
  const handleDelete = async (id: number) => {
    try {
      await remove(id);
      setPowerStations((prev) =>
        prev.filter((powerStation) => powerStation.id !== id),
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (
    id: number,
    updatedPowerStation: { name: string; status: string },
  ): Promise<PowerStation> => {
    const updated = await update(id, updatedPowerStation);

    setPowerStations((prev) => prev.map((s) => (s.id === id ? updated : s)));
    return updated;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll();
        setPowerStations(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (

    <div

      style={{
        padding: '2rem',
        fontFamily: 'sans-serif',
        backgroundColor: 'white',
        minHeight: '100vh',
        color: 'black',
      }}>
      <PowerStationForm
        powerStationName={powerStationName}
        setPowerStationName={setPowerStationName}
        powerStationStatus={powerStationStatus}
        setPowerStationStatus={setPowerStationStatus}
        handleAddPowerStation={handleAddPowerStation}
      />
      <PowerStationList
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        powerStations={powerStations}
      />


    </div>
  );
}

export default App;
