package back.service_impl;

import back.dao_abst.ConfigurationDao;
import back.models.Configuration;
import back.service_abst.ConfigurationService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by SaidHazzarD on 23.08.2020.
 */
public class ConfigurationServiceImpl implements ConfigurationService {

    @Autowired
    private ConfigurationDao configurationDao;


    @Override
    public Configuration getConfigurationById(Long id) {
        return configurationDao.getByKey(id);
    }

    @Override
    public void addConfiguration(Configuration configuration) {
        configurationDao.persist(configuration);
    }

    @Override
    public List<Configuration> getAllConfiguration() {
        return configurationDao.getAll();
    }

    @Override
    public void deleteConfigurationById(Long id) {
        configurationDao.deleteByKey(id);
    }

    @Override
    public void updateConfiguration(Configuration configuration) {
        configurationDao.update(configuration);
    }
}
