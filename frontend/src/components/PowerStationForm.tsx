import React from 'react';

type PowerStationFormProps = {
  powerStationName: string;
  setPowerStationName: (value: string) => void;
  powerStationStatus: string;
  setPowerStationStatus: (value: string) => void;
  handleAddPowerStation: React.SubmitEventHandler<HTMLFormElement>;
};

const PowerStationForm = ({
  powerStationName,
  setPowerStationName,
  powerStationStatus,
  setPowerStationStatus,
  handleAddPowerStation,
}: PowerStationFormProps) => {
  return (
    <><h1 style={{ marginBottom: '1.5rem' }}>Enerlytics Dashboard</h1>
      <form
        onSubmit={handleAddPowerStation}
        style={{
          padding: '1rem',
          borderRadius: '8px',
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center',
          border: '1px solid #333',
          marginBottom: '2rem',
        }}
      >
        <input
          value={powerStationName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPowerStationName(e.target.value)
          }
          placeholder="PowerStation name"
          style={{
            border: '1px solid #666',
            padding: '0.5rem',
            borderRadius: '4px',
            flex: 1,
          }}
        />

        <input
          value={powerStationStatus}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPowerStationStatus(e.target.value)
          }
          placeholder="Status"
          style={{
            border: '1px solid #666',
            padding: '0.5rem',
            borderRadius: '4px',
            flex: 1,
          }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default PowerStationForm;
