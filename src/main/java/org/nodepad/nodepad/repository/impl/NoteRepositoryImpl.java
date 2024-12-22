package org.nodepad.nodepad.repository.impl;

import org.nodepad.nodepad.model.Note;
import org.nodepad.nodepad.repository.NoteRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class NoteRepositoryImpl implements NoteRepository {
    List<Note> notes= new ArrayList<Note>();
    @Override
    public void save(Note note) {
        Integer maxId = findAll().stream()
                .map(note1 -> note1.getId()).max(Integer::compareTo)
                .orElse(0);
        note.setId(maxId + 1);
        notes.add(note);


    }

    @Override
    public List<Note> findAll() {
        return notes;
    }

    @Override
    public void edit(Note note) {
        System.out.println("");
        for (Note note1 : findAll()) {
            if(note1.getId() == note.getId()) {
                note1.setTitle(note.getTitle());
                note1.setTitle(note.getTitle());
            }
        }

        System.out.println("");
    }

    @Override
    public void delete(int id) {
        findAll().stream().filter(note -> note.getId()==id).findFirst().ifPresent(note -> {notes.remove(note);});
        System.out.println("");
    }
}
