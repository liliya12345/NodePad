package org.nodepad.nodepad.controller;

import org.nodepad.nodepad.dto.NoteDto;
import org.nodepad.nodepad.model.Note;
import org.nodepad.nodepad.service.impl.NodeServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5000")
public class NoteController {
    private final NodeServiceImpl nodeService;

    public NoteController(NodeServiceImpl nodeService) {
        this.nodeService = nodeService;
    }

    @PostMapping("/add")
    public ResponseEntity<?> addNote(  @RequestBody NoteDto note ) {
        nodeService.addNode(note);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(note);

    }
    @GetMapping("/getAllNote")
    public ResponseEntity<?> getAllNote() {
//        nodeService.getAll();
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(nodeService.getAll());
    }
    @PostMapping("/edit")
    public ResponseEntity<?> editNote(  @RequestBody NoteDto note ) {
        nodeService.editNote(note);
        return ResponseEntity.ok().body(note);
    }
    @PostMapping("/delete/{id}")
    public ResponseEntity<?> delete( @PathVariable("id") String id ) {
       nodeService.delete(Integer.parseInt(id));
        return ResponseEntity.ok().body(id);
    }

}
