package com.washed.RennalaLib.services;

import com.washed.RennalaLib.dto.UserDto;
import com.washed.RennalaLib.models.MyUser;
import com.washed.RennalaLib.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public boolean loginUser(UserDto user) {
        return this.userRepository.findAll().stream().anyMatch(myUser1 ->
            user.getUsername().equals(myUser1.getName()) && user.getPassword().equals(myUser1.getPassword())
        );
    }


    public MyUser signupUser(MyUser myUser) {
        //FIXME: didn't check if the myUser already exists or not
        return this.userRepository.save(myUser);
    }
}
