import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CustomEditor = ({ setEditorHtml }) => {
  return (
    <div>
      <ReactQuill
        onChange={setEditorHtml}
        modules={{
          toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'},
             {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean'],
            ['save'] 
          ],
        }}
      />
    </div>
  );
};

export default CustomEditor;