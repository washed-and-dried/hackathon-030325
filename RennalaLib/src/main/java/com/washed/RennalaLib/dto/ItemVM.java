package com.washed.RennalaLib.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ItemVM {
    private Long id;

    private String name;
    private String description;
    private String url;
    private Date availability;
    private Date uploadedOn;

    private Long user_id;
    private Long course_id;
}
