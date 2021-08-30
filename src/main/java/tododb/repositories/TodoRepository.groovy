package tododb.repositories

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional
import tododb.entities.Todo

@Repository
interface TodoRepository extends JpaRepository<Todo, Long> {

    @Override
    @Query("select e from #{#entityName} e where e.deleteDate is null")
    List<Todo> findAll();

    @Query("select e from #{#entityName} e where e.deleteDate is not null")
    List<Todo> findAllDeleted();

    @Query("update #{#entityName} e set e.deleteDate= :currentDate where e.deleteDate is null")
    @Modifying
    @Transactional
    void softDeleteAll(@Param("currentDate") Date currentDate);
}