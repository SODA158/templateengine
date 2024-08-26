import React from "react";
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/table.min.js";
import "froala-editor/js/plugins/lists.min.js";
import "froala-editor/js/languages/ru.js";
import $ from "jquery";

window.$ = $;
window.FroalaEditor = require("froala-editor");
require("@wiris/mathtype-froala3");

const MyEditor = ({ config, data, changeElement }) => {
  const handleModelChange = (model) => {
    console.log(model);
    changeElement("content", model);
  };

  return (
    <FroalaEditor
      model={data}
      onModelChange={handleModelChange}
      config={config}
    />
  );
};

export default MyEditor;
