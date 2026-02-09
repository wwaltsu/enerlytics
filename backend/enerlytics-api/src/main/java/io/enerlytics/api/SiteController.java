package io.enerlytics.api;

import java.util.List;
import io.enerlytics.api.site.Site;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.enerlytics.api.site.SiteService;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/sites")
public class SiteController {

    private final SiteService siteService;

    public SiteController(SiteService siteService) {
        this.siteService = siteService;

    }

    @GetMapping
    public List<Site> all() {
        return siteService.findAllSites();
    }

    @GetMapping("/{id}")
    public Site getSiteById(@PathVariable Long id) {
        return siteService.getSite(id);
    }

    @PostMapping
    public Site create(@RequestBody Site site) {
        return siteService.createSite(site);
    }

    @PutMapping("/{id}")
    public Site update(@PathVariable Long id, @RequestBody Site site) {
        return siteService.updateSite(id, site);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        siteService.deleteSite(id);

    }

}
