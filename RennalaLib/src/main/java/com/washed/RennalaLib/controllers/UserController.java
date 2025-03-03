package com.washed.RennalaLib.controllers;

import com.washed.RennalaLib.dto.GenericResponse;
import com.washed.RennalaLib.dto.UserDto;
import com.washed.RennalaLib.models.Course;
import com.washed.RennalaLib.models.MyUser;
import com.washed.RennalaLib.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@CrossOrigin(origins = "")
public class UserController {
    private final UserService userService;

    @PostMapping("/login")
    public GenericResponse loginUser(@RequestBody UserDto user) {
        final var valid = userService.loginUser(user);
        if (valid != null) {
            return GenericResponse.builder().message("success").user(valid).build();
        } else {
            return GenericResponse.builder().message("failed").build();
        }
    }

    @PostMapping("/signup")
    public MyUser signupUser(@RequestBody MyUser myUser) {
        return this.userService.signupUser(myUser);
    }

    @PostMapping("/subscribe/{course-id}/{user-id}")
    public MyUser subscribe(@PathVariable("course-id") long course_id, @PathVariable("user-id") long user_id) {
        return this.userService.addCourse(course_id, user_id);
    }

    @GetMapping("/user/courses/{user-id}")
    public List<Course> getCoursesUsers(@PathVariable("user-id") long user_id) {
        return this.userService.getCoursesUser(user_id);
    }
}
