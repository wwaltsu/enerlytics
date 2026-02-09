package io.enerlytics.api;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SiteController {

    @GetMapping("api/sites")
    public List<Map<String, Object>> sites() {
        return List.of(
                Map.of("id", 1, "name", "Solar Planet Alpha", "status", "OK"),
                Map.of("id", 2, "name", "Wind Farm Beta", "status", "warning")
        );
    }

}
