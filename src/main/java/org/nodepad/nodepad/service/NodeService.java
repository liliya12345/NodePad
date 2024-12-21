package org.nodepad.nodepad.service;

import org.nodepad.nodepad.dto.NoteDto;
import org.nodepad.nodepad.model.Note;

import java.util.List;

public interface NodeService {

    void addNode(NoteDto note);

    List<Note> getAll();

    void editNote(NoteDto note);

    void delete(int id);
}
