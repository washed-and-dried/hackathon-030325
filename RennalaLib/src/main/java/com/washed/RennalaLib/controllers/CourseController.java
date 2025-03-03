package com.washed.RennalaLib.controllers;

import com.washed.RennalaLib.models.Course;
import com.washed.RennalaLib.services.CourseService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/course")
public class CourseController {
    private CourseService courseService;

    @GetMapping("/all")
    public List<Course> getCourses() {
        return this.courseService.getCourses();
    }

    @GetMapping("/{id}")
    public Course getCourse(@PathVariable long id) {
        return this.courseService.getCourse(id);
    }

    @PostMapping("/create")
    public Course createCourse(@RequestBody Course course) {
        return this.courseService.createCourse(course);
    }
}
