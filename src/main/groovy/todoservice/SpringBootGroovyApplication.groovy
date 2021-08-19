package todoservice

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.context.annotation.ComponentScan
import org.springframework.data.jpa.repository.config.EnableJpaRepositories

@SpringBootApplication
@ComponentScan(basePackages = ["tododb", "todoservice"])
@EntityScan("tododb")
@EnableJpaRepositories("tododb.repositories")
class SpringBootGroovyApplication {
    static void main(String[] args) {
        SpringApplication.run SpringBootGroovyApplication, args
    }
}
