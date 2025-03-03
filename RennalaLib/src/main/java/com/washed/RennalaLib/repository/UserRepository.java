package com.washed.RennalaLib.repository;

import com.washed.RennalaLib.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
