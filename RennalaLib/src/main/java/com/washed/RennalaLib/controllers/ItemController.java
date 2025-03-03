package com.washed.RennalaLib.controllers;

import com.washed.RennalaLib.dto.ItemVM;
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

    @PostMapping("/create")
    public Item createItem(@RequestBody ItemVM item) {
        return this.itemService.createItem(item);
    }
}
