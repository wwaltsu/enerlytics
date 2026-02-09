package io.enerlytics.api.site;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class SiteService {

    private final SiteRepository repo;

    public SiteService(SiteRepository repo) {
        this.repo = repo;
    }

    public List<Site> findAll() {
        return repo.findAll();
    }

}
