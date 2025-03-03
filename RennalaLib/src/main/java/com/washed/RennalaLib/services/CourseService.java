package com.washed.RennalaLib.services;

import com.washed.RennalaLib.models.Course;
import com.washed.RennalaLib.repository.CourseRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class CourseService {
    private final CourseRepository courseRepository;

    public List<Course> getCourses() {
        return this.courseRepository.findAll();
    }

    public Course getCourse(long id) {
        return this.courseRepository.findById(id).orElseThrow(() -> new RuntimeException("Course not found"));
    }

    public Course createCourse(Course course) {
        return this.courseRepository.save(course);
    }
}
