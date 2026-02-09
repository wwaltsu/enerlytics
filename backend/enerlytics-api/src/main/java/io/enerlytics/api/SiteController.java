package io.enerlytics.api;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import io.enerlytics.api.site.Site;
import io.enerlytics.api.site.SiteService;

@RestController
public class SiteController {

    private final SiteService siteService;

    public SiteController(SiteService siteService) {
        this.siteService = siteService;

    }

    @GetMapping("/api/sites")
    public List<Site> sites() {
        return siteService.findAll();
    }

}
