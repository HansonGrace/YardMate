package com.backyardmate.yardmate.model;

import jakarta.persistence.*;

@Entity
public class Game {

    //auto increment for SQL
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String time;
    private String description;

    //constructors
    public Game(){}

    public Game(String name, String location, String time, String description) {
        this.name = name;
        this.location = location;
        this.time = time;
        this.description = description;
    }

    //getters and setters
    //to access and update data
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLocation() {
        return location;
    }

    public String getTime() {
        return time;
    }

    public String getDescription() {
        return description;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}