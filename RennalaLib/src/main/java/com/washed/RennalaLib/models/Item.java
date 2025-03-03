package com.washed.RennalaLib.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "items")

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String description;
    private String url;
    private Date availability;
    private Date uploadedOn;

    @ManyToOne
    private MyUser myUser;

    @ManyToOne
    private Course course;
}
