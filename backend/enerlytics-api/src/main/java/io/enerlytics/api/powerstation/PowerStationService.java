package io.enerlytics.api.powerstation;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class PowerStationService {

    private final PowerStationRepository repo;

    public PowerStationService(PowerStationRepository repo) {
        this.repo = repo;
    }

    public List<PowerStation> findAllPowerStations() {
        return repo.findAll();
    }

    public PowerStation getPowerStation(Long id) {
        return repo.findById(id).orElseThrow();
    }

    public PowerStation createPowerStation(PowerStation powerStation) {
        return repo.save(powerStation);
    }

    public PowerStation updatePowerStation(Long id, PowerStation updated) {
        PowerStation powerStation = getPowerStation(id);
        powerStation.setName(updated.getName());
        powerStation.setStatus(updated.getStatus());
        return repo.save(powerStation);
    }

    public void deletePowerStation(Long id) {
        repo.deleteById(id);
    }

}
