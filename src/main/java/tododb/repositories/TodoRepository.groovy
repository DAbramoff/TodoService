package tododb.repositories

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional
import tododb.entities.Todo
import tododb.entities.TodoStatusEnum

@Repository
interface TodoRepository extends JpaRepository<Todo, Long> {

    @Query("select e from #{#entityName} e where e.status = :status")
    List<Todo> findAll(@Param("status") TodoStatusEnum status);

    @Query("update #{#entityName} e set e.status = 2")
    @Modifying
    @Transactional
    void softDeleteAll();

    @Query("update #{#entityName} e set e.status = 2 where e.id= :id")
    @Modifying
    @Transactional
    void softDelete(@Param("id") Long id);
}