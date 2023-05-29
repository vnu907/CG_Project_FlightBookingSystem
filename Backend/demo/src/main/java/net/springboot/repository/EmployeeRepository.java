package net.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.spriongboot.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee ,Long>{

}
