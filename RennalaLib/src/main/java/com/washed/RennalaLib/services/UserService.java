package com.washed.RennalaLib.services;

import com.washed.RennalaLib.dto.UserDto;
import com.washed.RennalaLib.models.User;
import com.washed.RennalaLib.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public boolean loginUser(UserDto user) {
        return this.userRepository.findAll().stream().anyMatch(user1 ->
            user.getUsername().equals(user1.getName()) && user.getPassword().equals(user1.getPassword())
        );
    }


    public User signupUser(User user) {
        //FIXME: didn't check if the user already exists or not
        return this.userRepository.save(user);
    }
}
