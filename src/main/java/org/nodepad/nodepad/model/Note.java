package org.nodepad.nodepad.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

public class Note {
    private int id;
    private String title;
    private LocalDateTime time;

    public Note(String title, LocalDateTime time) {
        this.title = title;
        this.time = time;
    }

    public Note() {
    }

    public Note(int id, String title, LocalDateTime time) {
        this.id = id;
        this.title = title;
        this.time = time;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
