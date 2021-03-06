package back.dao_abst;

import java.io.Serializable;
import java.util.List;

/**
 * GenericDao
 */
public interface GenericDao<PK extends Serializable, T> {
    void persist(T entity);

    T getByKey(PK id);

    List<T> getAll();

    void update(T group);

    void deleteByKey(PK id);
}
