package com.washed.RennalaLib.controllers;

import com.washed.RennalaLib.dto.GenericResponse;
import com.washed.RennalaLib.dto.UserDto;
import com.washed.RennalaLib.models.MyUser;
import com.washed.RennalaLib.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @PostMapping("/login")
    private GenericResponse loginUser(@RequestBody UserDto user) {
        final var valid = userService.loginUser(user);
        if (valid) {
            return GenericResponse.builder().message("success").build();
        } else {
            return GenericResponse.builder().message("failed").build();
        }
    }

    @PostMapping("/signup")
    private MyUser signupUser(@RequestBody MyUser myUser) {
        return this.userService.signupUser(myUser);
    }
}
