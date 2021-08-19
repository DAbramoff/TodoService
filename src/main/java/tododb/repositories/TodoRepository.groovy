package tododb.repositories

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional
import tododb.entities.Todo

@Repository
interface TodoRepository extends JpaRepository<Todo, Integer> {
    @Transactional
    @Modifying
    Integer deleteByCompleted(Boolean isCompleted);
}