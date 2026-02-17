import type { PowerStation } from '../schemas/PowerStationSchema';
import PowerStationItem from './PowerStationItem';

type PowerStationListProps = {
    handleDelete: (id: number) => void;
    handleUpdate: (
        id: number,
        data: { name: string; status: string },
    ) => Promise<PowerStation>;
    powerStations: PowerStation[];
};

const PowerStationList = ({
    handleDelete,
    handleUpdate,
    powerStations,
}: PowerStationListProps) => {
    return powerStations.length === 0 ? (
        <p>Loading Power Stations...</p>
    ) : (
        <div>
            <ul>
                {powerStations.map((powerStation) => (
                    <PowerStationItem
                        key={powerStation.id}
                        powerStation={powerStation}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                    />
                ))}
            </ul>
        </div>
    );
};

export default PowerStationList;
