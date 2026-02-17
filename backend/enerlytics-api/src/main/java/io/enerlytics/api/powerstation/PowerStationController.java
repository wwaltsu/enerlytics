package io.enerlytics.api.powerstation;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/powerstations")
public class PowerStationController {

    private final PowerStationService powerStationService;

    public PowerStationController(PowerStationService powerStationService) {
        this.powerStationService = powerStationService;

    }

    @GetMapping
    public List<PowerStation> all() {
        return powerStationService.findAllPowerStations();
    }

    @GetMapping("/{id}")
    public PowerStation getPowerStationById(@PathVariable Long id) {
        return powerStationService.getPowerStation(id);
    }

    @PostMapping
    public PowerStation create(@RequestBody PowerStation powerStation) {
        return powerStationService.createPowerStation(powerStation);
    }

    @PutMapping("/{id}")
    public PowerStation update(@PathVariable Long id, @RequestBody PowerStation powerStation) {
        return powerStationService.updatePowerStation(id, powerStation);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        powerStationService.deletePowerStation(id);

    }

}
