package com.washed.RennalaLib.repository;

import com.washed.RennalaLib.models.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
