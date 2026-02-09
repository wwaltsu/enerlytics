package io.enerlytics.api.site;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class SiteService {

    private final SiteRepository repo;

    public SiteService(SiteRepository repo) {
        this.repo = repo;
    }

    public List<Site> findAllSites() {
        return repo.findAll();
    }

    public Site getSite(Long id) {
        return repo.findById(id).orElseThrow();
    }

    public Site createSite(Site site) {
        return repo.save(site);
    }

    public Site updateSite(Long id, Site updated) {
        Site site = getSite(id);
        site.setName(updated.getName());
        site.setStatus(updated.getStatus());
        return repo.save(site);
    }

    public void deleteSite(Long id) {
        repo.deleteById(id);
    }

}
