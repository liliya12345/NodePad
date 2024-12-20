package org.nodepad.nodepad.controller;

import org.nodepad.nodepad.dto.NoteDto;
import org.nodepad.nodepad.model.Note;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5000")
public class NoteController {
    @PostMapping("/add")
    public ResponseEntity<?> addNote(NoteDto note) {
        return ResponseEntity.ok("New note add");

    }

}
