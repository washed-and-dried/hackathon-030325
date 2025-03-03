package com.washed.RennalaLib.services;

import com.washed.RennalaLib.models.Item;
import com.washed.RennalaLib.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ItemService {
    private final ItemRepository itemRepository;
    private final UserService userService;
    private final CourseService courseService;

    public List<Item> getItems() {
        return this.itemRepository.findAll();
    }

    public Item createItem(Item item, long userId, long courseId) {
        item.setMyUser(this.userService.getUser(userId));
        item.setCourse(this.courseService.getCourse(courseId));

        return this.itemRepository.save(item);
    }

    public Item getItem(long id) {
        return this.itemRepository.findById(id).orElseThrow(() -> new RuntimeException("Item not found"));
    }
}
