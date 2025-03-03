package com.washed.RennalaLib.controllers;

import com.washed.RennalaLib.models.Item;
import com.washed.RennalaLib.services.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/item")
@RequiredArgsConstructor
public class ItemController {
    private final ItemService itemService;

    @GetMapping("/all")
    public List<Item> getItems() {
        return this.itemService.getItems();
    }

    @GetMapping("/{id}")
    public Item getItem(@PathVariable long id) {
        return this.itemService.getItem(id);
    }

    @PostMapping("/{user-id}/{course-id}/create")
    public Item createItem(@RequestBody Item item, @PathVariable("user-id") long user_id, @PathVariable("course-id") long course_id) {
        return this.itemService.createItem(item, user_id, course_id);
    }
}
