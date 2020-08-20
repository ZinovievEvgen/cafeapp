package back.service_abst;

import back.models.Configuration;

import java.util.List;

/**
 * Created by SaidHazzarD on 20.08.2020.
 */
public interface ConfigurationService {

    Configuration getConfigurationById(Long id);

    void addConfiguration(Configuration configuration);

    List<Configuration> getAllConfiguration();

    void deleteConfigurationById(Long id);

    void updateConfiguration(Configuration configuration);

}
