package org.nodepad.nodepad.repository;

import org.nodepad.nodepad.model.Note;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface NoteRepository {
    public void save(Note note);

    public List<Note> findAll();

    void edit(Note note);

    void delete(int id);
}
