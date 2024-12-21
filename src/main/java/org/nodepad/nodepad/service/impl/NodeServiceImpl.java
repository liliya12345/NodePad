package org.nodepad.nodepad.service.impl;

import org.nodepad.nodepad.dto.NoteDto;
import org.nodepad.nodepad.model.Note;
import org.nodepad.nodepad.repository.impl.NoteRepositoryImpl;
import org.nodepad.nodepad.service.NodeService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class NodeServiceImpl implements NodeService {
  private final NoteRepositoryImpl noteRepository;

    public NodeServiceImpl(NoteRepositoryImpl noteRepository) {
        this.noteRepository = noteRepository;
    }

    @Override
    public void addNode(NoteDto noteDto) {
        Note note = new Note();
        note.setTitle(noteDto.getTitle());
        LocalDateTime parse = LocalDateTime.parse(noteDto.getTime());
        note.setTime(parse);
        noteRepository.save(note);
    }

    @Override
    public List<Note> getAll() {
        List<Note> notes = new ArrayList<Note>();
        noteRepository.findAll().stream().forEach(note -> {notes.add(new Note( note.getId(),note.getTitle(), note.getTime()));});
        return notes;
    }

    @Override
    public void editNote(NoteDto noteDto) {
        Note note = new Note();
        note.setTitle(noteDto.getTitle());
        note.setId(noteDto.getId());
        note.setTime(LocalDateTime.parse(noteDto.getTime()));
        noteRepository.edit(note);

    }

    @Override
    public void delete(int id) {
        noteRepository.delete(id);
    }

}
