package com.washed.RennalaLib.services;

import com.washed.RennalaLib.dto.UserDto;
import com.washed.RennalaLib.models.Course;
import com.washed.RennalaLib.models.MyUser;
import com.washed.RennalaLib.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final CourseService courseService;

    public MyUser loginUser(UserDto user) {
        final var users = this.userRepository.findAll();

        for (MyUser u : users) {
            if (user.getUsername().equals(u.getName()) && user.getPassword().equals(u.getPassword())) {
                return u;
            }
        }

        return null;
    }


    public MyUser signupUser(MyUser myUser) {
        //FIXME: didn't check if the myUser already exists or not
        myUser.setCourses(List.of());
        return this.userRepository.save(myUser);
    }

    public MyUser getUser(final long userId) {
        return this.userRepository.findById(userId).orElseThrow(() -> new RuntimeException("Man it just doesn't work"));
    }

    public MyUser getUserByUsername(String username) {
        return this.userRepository.findAll()
                .stream().filter(myUser -> myUser.getName().equals(username))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Man it just doesn't work"));
    }

    public MyUser addCourse(long courseId, long userId) {
        final var user = this.getUser(userId);
        final var course = this.courseService.getCourse(courseId);

        if (user.getCourses().stream().noneMatch(course1 -> course1.getId().equals(courseId))) {
            user.getCourses().add(course);
        }

        return user;
    }

    public List<Course> getCoursesUser(long userId) {
        return this.getUser(userId).getCourses();
    }
}
