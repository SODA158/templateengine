export const TextFroalaConfig = {
  toolbarButtons: [
    "undo",
    "redo",
    "|",
    "bold",
    "italic",
    "|",
    "formatOLSimple",
    "formatUL",
  ],
  fontSizeDefaultSelection: "26",
  fontSizeSelection: true,
  fontSizeUnit: "px",
  lineHeights: "1.5",
  attribution: false,
  height: "680px",
  width: "100%",
  language: "ru",
  htmlAllowedTags: [".*"],
  htmlAllowedAttrs: [".*"],
  // Allow empty tags on these next elements for proper formula rendering:
  htmlAllowedEmptyTags: [
    "mprescripts",
    "none",
    "textarea",
    "a",
    "iframe",
    "object",
    "video",
    "style",
    "script",
    ".fa",
    ".fr-emoticon",
    ".fr-inner",
    "path",
    "line",
    "hr",
  ],
};

export const ImageFroalaConfig = {
  toolbarButtons: ["undo", "redo", "|", "insertImage"],
  imageEditButtons: ["imageRemove", "imageSize"],
  attribution: false,
  height: "680px",
  width: "100%",
  language: "ru",
  imageUploadURL: null,
  imageUploadParam: "file",
  imageUploadToBase64: true,
  imageMaxSize: 10 * 1024 * 1024, // 10MB
  imageAllowedTypes: ["jpeg", "jpg", "png", "gif", "svg"],
  fontSizeDefaultSelection: "26",
  fontSizeSelection: true,
  fontSizeUnit: "px",
  lineHeights: "1.5",
  imageUploadRemoteUrls: true,
  htmlAllowedTags: [".*"],
  htmlAllowedAttrs: [".*"],
  // Allow empty tags on these next elements for proper formula rendering:
  htmlAllowedEmptyTags: [
    "mprescripts",
    "none",
    "textarea",
    "a",
    "iframe",
    "object",
    "video",
    "style",
    "script",
    ".fa",
    ".fr-emoticon",
    ".fr-inner",
    "path",
    "line",
    "hr",
  ],
  events: {
    "image.beforeUpload": function (files) {
      var editor = this;
      if (files.length) {
        var reader = new FileReader();

        reader.onload = function (e) {
          var result = e.target.result;
          editor.image.insert(result, null, null, editor.image.get());
        };

        reader.readAsDataURL(files[0]);
      }
      editor.popups.hideAll();

      return false;
    },
  },
};

export const EquationFroalaConfig = {
  toolbarButtons: ["undo", "redo", "|", "wirisEditor", "wirisChemistry"],
  imageEditButtons: ["wirisEditor", "wirisChemistry", "imageRemove"],
  attribution: false,
  height: "680px",
  width: "100%",
  language: "ru",
  // imageMaxSize: 10 * 1024 * 1024, // 10MB
  imageAllowedTypes: ["jpeg", "jpg", "png", "gif", "svg"],
  // imageUploadRemoteUrls: true,
  htmlAllowedTags: [".*"],
  htmlAllowedAttrs: [".*"],
  // Allow empty tags on these next elements for proper formula rendering:
  // htmlAllowedEmptyTags: [
  //   "mprescripts",
  //   "none",
  //   "textarea",
  //   "a",
  //   "iframe",
  //   "object",
  //   "video",
  //   "style",
  //   "script",
  //   ".fa",
  //   ".fr-emoticon",
  //   ".fr-inner",
  //   "path",
  //   "line",
  //   "hr",
  // ],
  htmlAllowedEmptyTags: ["mprescripts", "none"],
  // Настройки MathType
  mathTypeParameters: {
    editorParameters: {
      // Language: "ru",
      detectHand: true,
      // content:'<math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mo>∫</mo><mn>1</mn></msub><mi>x</mi> <mo>d</mo><mi>x</mi></math>',
      // mml: '<math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mo>∫</mo><mn>1</mn></msub><mi>x</mi> <mo>d</mo><mi>x</mi></math>',
      display: "block",
      zoom: 3,
      contentType: "png",
      formula: "<math>...</math>", // Вместо MathML вы можете передавать формулу в LaTeX
      saveMode: "base64",
      //   imageMathML: true,
      //   imageMathMLOptions: {
      //     backgroundColor: "white",
      //     zoom: 1.5,
      //     resolution: 96,
      //     format: "png"
      //   }
    },
  },
};

export const TableFroalaConfig = {
  toolbarButtons: ["undo", "redo", "|", "insertTable"],
  tableEditButtons: [
    "tableRows",
    "tableColumns",
    "tableCells",
    "tableSize",
    "tableRemove",
  ],
  attribution: false,
  height: "680px",
  width: "100%",
  language: "ru",
  imageUploadURL: null,
  imageUploadParam: "file",
  imageUploadToBase64: true,
  imageMaxSize: 10 * 1024 * 1024, // 10MB
  imageAllowedTypes: ["jpeg", "jpg", "png", "gif"],
  imageUploadRemoteUrls: true,
};
