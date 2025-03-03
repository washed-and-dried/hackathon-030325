package com.washed.RennalaLib.repository;

import com.washed.RennalaLib.models.MyUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<MyUser, Long> {
}
