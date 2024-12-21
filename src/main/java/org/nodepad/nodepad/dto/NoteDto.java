package org.nodepad.nodepad.dto;



import lombok.*;

import java.time.LocalDateTime;

public class NoteDto {
        private int id;
        private String title;
        private String time;

        public NoteDto(String title, String time) {
                this.title = title;
                this.time = time;
        }

        public NoteDto(int id, String title, String time) {
                this.id = id;
                this.title = title;
                this.time = time;
        }

        public NoteDto() {
        }

        public String getTitle() {
                return title;
        }

        public void setTitle(String title) {
                this.title = title;
        }

        public String getTime() {
                return time;
        }

        public void setTime(String time) {
                this.time = time;
        }

        public int getId() {
                return id;
        }

        public void setId(int id) {
                this.id = id;
        }


        //
}
