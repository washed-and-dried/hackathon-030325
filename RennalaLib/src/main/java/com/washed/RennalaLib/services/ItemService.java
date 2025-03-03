package com.washed.RennalaLib.services;

import com.washed.RennalaLib.dto.ItemVM;
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

    public Item createItem(ItemVM item) {
        Item itemm = Item.builder()
                .url(item.getUrl())
                .name(item.getName())
                .availability(item.getAvailability())
                .description(item.getDescription())
                .uploadedOn(item.getUploadedOn())
                .build();

        itemm.setMyUser(this.userService.getUser(item.getUser_id()));
        itemm.setCourse(this.courseService.getCourse(item.getCourse_id()));

        return this.itemRepository.save(itemm);
    }

    public Item getItem(long id) {
        return this.itemRepository.findById(id).orElseThrow(() -> new RuntimeException("Item not found"));
    }
}
