package org.nodepad.nodepad.dto;

import java.util.Date;

public class NoteDto {
        private int id;
        private String title;
        private Date time;

        public NoteDto(int id, String title, Date time) {
                this.id = id;
                this.title = title;
                this.time = time;
        }

        public NoteDto() {
        }

        public int getId() {
                return id;
        }

        public void setId(int id) {
                this.id = id;
        }

        public String getTitle() {
                return title;
        }

        public void setTitle(String title) {
                this.title = title;
        }

        public Date getTime() {
                return time;
        }

        public void setTime(Date time) {
                this.time = time;
        }


        //
}
