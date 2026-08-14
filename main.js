(function () {
  "use strict";

  var PLUGIN_ID = "acode.plugin.repechul.godot.editortheme";
  var THEME_ID = "godot_theme";
  var THEME_CAPTION = "Godot - Editor Theme";
  var IS_DARK = true;


  var palette = {

    panelBg: "#c09d09",
    printMargin: "#27191b",
    scrollbarThumb: "#70e4f6",

/* Symbol Color */
	brace: "#abc9ff", // Corchetes "{}"
    punctuation: "#abc9ff", // Punto "."
	squareBracket: "#abc9ff", // Paréntesis Recto "[]"
    paren: "#abc9ff", // Paréntesis "()"
	operator: "#abc9ff", // Símbolos : = →

/* Keyword Color */
	definitionKeyword: "#ff7085",
	operatorKeyword: "#ff7085",

/* Control Flow Keyword Color */
	controlKeyword: "#ff8ccc", // if, else, etc etc

/* Base Type Color */
	typeName: "#42ffc2", // Vector2, float, bool, etc etc

/* Engine Type Color */
	engineTypeName: "#8fffdb", // Nodos (Node2D, Control, etc). Antes compartía typeName con Base Type; ya separado en el tokenizer (v0.9.1).

/* User Type Color */
	className: "#c7ffed",

/* Comment Color */
	comment: "#ffffff80",

/* Doc Comment Color */
	docComment: "#99b2cc",
	  
/* String Color */
	string: "#ffeda1",

/* Background Color */
    background: "#171717",
	gutterBg: "#171717",
	  
/* Completion Background Color */
	tooltipBg: "#212121",
	  
/* Completion Selected Color */
	matchingBracket: "#8e8e8e",

/* Completion Existing Color */
	// n/f "#ffffff24"

/* Completion Scroll Color */
	// n/f "#ffffff4a"

/* Completion Scroll Hovered Color */
	// n/f "#ffffff66"

/* Completion Font Color */
	// n/f "#ffffffbf"

/* Text Color */
	// n/f "#ffffffbf"

/* Line Number Color */
	lineNumber: "#ffffff80",

/* Safe Line Number Color */
	// n/f

/* Caret Color */
	caret: "#ffffff", // Cursor | Símbolo de interacción

/* Caret Background Color */
	// n/f "#000000"

/* Text Selected Color */
	// n/f "#00000000"

/* Selection Color */
	selectionBg: "#317439", // En Godot : "#57ff6c66"

/* Brace Mismatch Color */
	nonMatchingBracket: "#ff786b", //Ni idea, supongo que es esto...

/* Current Line Color */
	activeGutter: "#ffffff12",
    activeLine: "#ffffff12",

/* Line Lenght Guideline Color */
	// n/f "#323232"

/* Word Highlighted Color */
	// n/f "#ffffff12"

/* Number Color */
	number: "#a1ffe0",

/* Function Color */
	variableName: "#57b3ff",
	functionCallName: "#57b3ff", // Llamada a método/función (con punto o sin punto, self implícito). Antes compartía color con Function Definition; ya separado en el tokenizer (v0.9.1).

/* Member Vsriable Color */
	definitionVar: "#bce0ff",
	propertyName: "#bce0ff",
	// Godot usa su propio color único "#bce0ff"⁹ pero el plugin Godot GDScript Support usa 	variableName: "#57b3ff", compartido, no diferencia entre ambos
	// (esto sigue así para una referencia SIN punto a un miembro, ej. "health"
	// dentro de un método en vez de "self.health": requeriría rastrear scope
	// para saber si es miembro o variable local. Pendiente, fuera de este fix.)

/* Mark Color */
	// n/f "#ff786b4d"

/* Warning Color */
	// n/f "#d4c79e26"

/* Boockmark Color */
	// n/f "#147dfa"

/* Breackpoint Color */
	// n/f "#ff786b"

/* Executing Line Color */
	// n/f "#fae345"

/* Code Folding Color */
	activeLineNumber: "#e3e2e8",

/* Search Result Color */
	selectionMatchBg: "#317439",

/* Search Result Color */
	// n/f "#699ce861"

/* Function Definition Color */
	functionName: "#66e6ff",
	
/* Global Function Color */
	standardName: "#a3a3f5", // Llamada a función global real (print, randi, lerp... GLOBAL_FUNCTIONS). Antes compartía color con variableName; ya separado en el tokenizer (v0.9.1). La regla t.standard(t.variableName) ya existía pero no la usaba nadie.

/* Node Path Color */
	// n/f "#b8c47d"

/* Node Reference Color */
	urlLiteral: "#63c259",

/* Annotation Color */
	attributeName: "#ffb373", // @export, "@'algo'"
	annotation: "#e7c944", // no usado/no identificado en el src
	  
/* String Name Color */
	// n/f "#ffc2a6"
	  

/* ↓↓↓ sin usar / no sé en qué se usa / sin editar colores */

foldPlaceholderBg: "#ffffff45",
searchMatch: "#699ce8",  

    foreground: "#8B8B8B",
    panelFg: "#cbe5c5",
    tooltipFg: "#dea5c0",
    foldPlaceholderFg: "#c1e3ee",
    indentGuide: "#dcd9ac",
    invisibles: "#dfc7ec",
    panelBorder: "#a5e8bd",
    tooltipBorder: "#ebcfcd",

    
    searchMatchSelected: "#9762f1",
    blockComment: "#eb6d88",
    keyword: "#cfe577",
    moduleKeyword: "#ff1515",
    localVar: "#9a8831",
    constantName: "#af5feb",

    labelName: "#3d71eb",
    namespaceName: "#b3df75",
    macroName: "#e34ad1",

    docString: "#dc9d56",
    character: "#8f71ec",
    attributeValue: "#c444f3",
    escapeChar: "#e77ba0",
    regexp: "#50b3eb",
    
    colorLiteral: "#c75ce5",
    integer: "#de7f68",
    float: "#3c4be4",
    bool: "#93f358",
    atom: "#dc48ac",
    unit: "#63e8ec",
    nullLiteral: "#d4b355",
    selfKeyword: "#a46ee6",
    tagName: "#4e8ee5",
    compareOperator: "#c7ffed",
    arithmeticOperator: "#d79466",
    logicOperator: "#8c80e8",
    bitwiseOperator: "#70ed55",
    updateOperator: "#e389b4",
    definitionOperator: "#60c6e6",
    typeOperator: "#ede333",
    controlOperator: "#b86be0",
    derefOperator: "#40e57c",
    separator: "#4c6cde",
    bracket: "#abc9ff",
    angleBracket: "#d658be",
    heading: "#c2c9ca",
    list: "#f46f92",
    quote: "#5ea6e0",
    emphasis: "#ddef7a",
    strong: "#ca69d9",
    link: "#84eabe",
    monospace: "#ee8259",
    strikethrough: "#4b4dd6",
    contentSeparator: "#8de864",
    meta: "#ef37a5",
    documentMeta: "#6fd5e2",
    processingInstruction: "#ae7adc",
    inserted: "#50df72",
    deleted: "#ef6c73",
    changed: "#5c87d8",
    invalid: "#c0e976",
  };


  var editorThemesApi = null;
  var cm6Registered = false;

  function buildCM6Theme() {
    editorThemesApi = editorThemesApi || acode.require("editorThemes");
    var cm = editorThemesApi.cm;
    var t = cm.tags;

    var rules = [
      // Comentarios
      { tag: t.comment, color: palette.comment, fontStyle: "italic" },
      { tag: t.lineComment, color: palette.comment, fontStyle: "italic" },
      { tag: t.blockComment, color: palette.blockComment, fontStyle: "italic" },
      { tag: t.docComment, color: palette.docComment, fontStyle: "italic" },

      // Palabras clave
      { tag: t.keyword, color: palette.keyword },
      { tag: t.controlKeyword, color: palette.controlKeyword },
      { tag: t.moduleKeyword, color: palette.moduleKeyword },
      { tag: t.definitionKeyword, color: palette.definitionKeyword },
      { tag: t.operatorKeyword, color: palette.operatorKeyword },

      // Variables / nombres
      { tag: t.variableName, color: palette.variableName },
      { tag: t.definition(t.variableName), color: palette.definitionVar },
      { tag: t.local(t.variableName), color: palette.localVar },
      { tag: t.function(t.variableName), color: palette.functionName },
      { tag: t.function(t.propertyName), color: palette.functionCallName },
      { tag: t.constant(t.variableName), color: palette.constantName },
      { tag: t.standard(t.variableName), color: palette.standardName },
      { tag: t.propertyName, color: palette.propertyName },
      { tag: t.labelName, color: palette.labelName },
      { tag: t.namespace, color: palette.namespaceName },
      { tag: t.macroName, color: palette.macroName },

      // Cadenas / literales de texto
      { tag: t.string, color: palette.string },
      { tag: t.special(t.string), color: palette.docString },
      { tag: t.character, color: palette.character },
      { tag: t.attributeValue, color: palette.attributeValue },
      { tag: t.escape, color: palette.escapeChar },
      { tag: t.regexp, color: palette.regexp },
      { tag: t.url, color: palette.urlLiteral },
      { tag: t.color, color: palette.colorLiteral },

      // Números / literales atómicos
      { tag: t.number, color: palette.number },
      { tag: t.integer, color: palette.integer },
      { tag: t.float, color: palette.float },
      { tag: t.bool, color: palette.bool },
      { tag: t.atom, color: palette.atom },
      { tag: t.unit, color: palette.unit },
      { tag: t.null, color: palette.nullLiteral },
      { tag: t.self, color: palette.selfKeyword },

      // Tipos / clases / etiquetas
      { tag: t.typeName, color: palette.typeName },
      { tag: t.standard(t.typeName), color: palette.engineTypeName },
      { tag: t.className, color: palette.className },
      { tag: t.tagName, color: palette.tagName },
      { tag: t.attributeName, color: palette.attributeName },

      // Operadores
      { tag: t.operator, color: palette.operator },
      { tag: t.compareOperator, color: palette.compareOperator },
      { tag: t.arithmeticOperator, color: palette.arithmeticOperator },
      { tag: t.logicOperator, color: palette.logicOperator },
      { tag: t.bitwiseOperator, color: palette.bitwiseOperator },
      { tag: t.updateOperator, color: palette.updateOperator },
      { tag: t.definitionOperator, color: palette.definitionOperator },
      { tag: t.typeOperator, color: palette.typeOperator },
      { tag: t.controlOperator, color: palette.controlOperator },
      { tag: t.derefOperator, color: palette.derefOperator },

      // Puntuación / delimitadores
      { tag: t.punctuation, color: palette.punctuation },
      { tag: t.separator, color: palette.separator },
      { tag: t.bracket, color: palette.bracket },
      { tag: t.angleBracket, color: palette.angleBracket },
      { tag: t.squareBracket, color: palette.squareBracket },
      { tag: t.paren, color: palette.paren },
      { tag: t.brace, color: palette.brace },

      // Markdown / marcado de texto
      { tag: t.heading, color: palette.heading, fontWeight: "bold" },
      { tag: t.heading1, color: palette.heading, fontWeight: "bold" },
      { tag: t.heading2, color: palette.heading, fontWeight: "bold" },
      { tag: t.heading3, color: palette.heading, fontWeight: "bold" },
      { tag: t.list, color: palette.list },
      { tag: t.quote, color: palette.quote },
      { tag: t.emphasis, color: palette.emphasis, fontStyle: "italic" },
      { tag: t.strong, color: palette.strong, fontWeight: "bold" },
      { tag: t.link, color: palette.link, textDecoration: "underline" },
      { tag: t.monospace, color: palette.monospace },
      { tag: t.strikethrough, color: palette.strikethrough, textDecoration: "line-through" },
      { tag: t.contentSeparator, color: palette.contentSeparator },

      // Metadatos
      { tag: t.meta, color: palette.meta },
      { tag: t.documentMeta, color: palette.documentMeta },
      { tag: t.annotation, color: palette.annotation },
      { tag: t.processingInstruction, color: palette.processingInstruction },

      // Diffs / estado
      { tag: t.inserted, color: palette.inserted },
      { tag: t.deleted, color: palette.deleted },
      { tag: t.changed, color: palette.changed },
      { tag: t.invalid, color: palette.invalid, textDecoration: "underline wavy" },
    ];

    var highlightStyle = editorThemesApi.createHighlightStyle(rules);

    return editorThemesApi.createTheme({
      dark: IS_DARK,
      highlightStyle: highlightStyle,
      styles: {
        "&": {
          backgroundColor: palette.background,
          color: palette.foreground,
        },
        ".cm-content": {
          caretColor: palette.caret,
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: palette.caret,
        },

        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":
          {
            backgroundColor: palette.selectionBg,
          },
        ".cm-selectionMatch": {
          backgroundColor: palette.selectionMatchBg,
        },
        ".cm-gutters": {
          backgroundColor: palette.gutterBg,
          color: palette.lineNumber,
          border: "none",
        },
        ".cm-lineNumbers .cm-gutterElement": {
          color: palette.lineNumber,
        },
        ".cm-activeLineGutter": {
          backgroundColor: palette.activeGutter,
          color: palette.activeLineNumber,
        },
        ".cm-activeLine": {
          backgroundColor: palette.activeLine,
        },
        ".cm-matchingBracket, .cm-nonmatchingBracket": {
          backgroundColor: palette.matchingBracket,
          outline: "none",
          color: "inherit",
        },
        ".cm-searchMatch": {
          backgroundColor: palette.searchMatch,
        },
        ".cm-searchMatch.cm-searchMatch-selected": {
          backgroundColor: palette.searchMatchSelected,
        },
        ".cm-foldPlaceholder": {
          backgroundColor: palette.foldPlaceholderBg,
          color: palette.foldPlaceholderFg,
          border: "none",
        },
        ".cm-panels": {
          backgroundColor: palette.panelBg,
          color: palette.panelFg,
        },
        ".cm-panels.cm-panels-top": {
          borderBottom: "1px solid " + palette.panelBorder,
        },
        ".cm-panels.cm-panels-bottom": {
          borderTop: "1px solid " + palette.panelBorder,
        },
        ".cm-tooltip": {
          backgroundColor: palette.tooltipBg,
          color: palette.tooltipFg,
          border: "1px solid " + palette.tooltipBorder,
        },
        ".cm-tooltip.cm-tooltip-autocomplete > ul > li[aria-selected]": {
          backgroundColor: palette.matchingBracket,
          color: palette.background,
        },
      },
    });
  }

  function registerCM6Theme() {
    if (cm6Registered) return;
    editorThemesApi = acode.require("editorThemes");
    editorThemesApi.register({
      id: THEME_ID,
      caption: THEME_CAPTION,
      dark: IS_DARK,
      getExtension: buildCM6Theme,
      config: {
        name: THEME_ID,
        dark: IS_DARK,
        background: palette.background,
        foreground: palette.foreground,
        keyword: palette.keyword,
        string: palette.string,
        number: palette.number,
        comment: palette.comment,
        function: palette.functionName,
        variable: palette.variableName,
        type: palette.typeName,
        class: palette.className,
        constant: palette.constantName,
        operator: palette.operator,
        invalid: palette.invalid,
      },
    });
    cm6Registered = true;
  }

  var ACE_THEME_MODULE = "ace/theme/" + THEME_ID;
  var ACE_CSS_CLASS = "ace-" + THEME_ID;

  function buildAceCss() {
    var c = ACE_CSS_CLASS;
    return [
      "." + c + " { background-color: " + palette.background + "; color: " + palette.foreground + "; }",
      "." + c + " .ace_gutter { background: " + palette.gutterBg + "; color: " + palette.lineNumber + "; }",
      "." + c + " .ace_print-margin { background: " + palette.printMargin + "; }",
      "." + c + " .ace_cursor { color: " + palette.caret + "; border-left: 2px solid " + palette.caret + "; }",
      "." + c + " .ace_marker-layer .ace_selection { background: " + palette.selectionBg + "; }",
      "." + c + ".ace_multiselect .ace_selection.ace_start { box-shadow: 0 0 3px 0 " + palette.background + "; }",
      "." + c + " .ace_marker-layer .ace_step { background: " + palette.searchMatch + "; }",
      "." + c + " .ace_marker-layer .ace_stack { background: " + palette.searchMatchSelected + "; }",
      "." + c + " .ace_marker-layer .ace_bracket { margin: -1px 0 0 -1px; border: 1px solid " + palette.matchingBracket + "; }",
      "." + c + " .ace_marker-layer .ace_active-line { background: " + palette.activeLine + "; }",
      "." + c + " .ace_gutter-active-line { background-color: " + palette.activeGutter + "; color: " + palette.activeLineNumber + "; }",
      "." + c + " .ace_marker-layer .ace_selected-word { border: 1px solid " + palette.selectionMatchBg + "; }",
      "." + c + " .ace_fold { background-color: " + palette.foldPlaceholderFg + "; border-color: " + palette.foreground + "; }",
      "." + c + " .ace_indent-guide { background-image: none; border-right: 1px dotted " + palette.indentGuide + "; }",
      "." + c + " .ace_invisible { color: " + palette.invisibles + "; }",

      "." + c + " .ace_keyword { color: " + palette.keyword + "; }",
      "." + c + " .ace_keyword.ace_control { color: " + palette.controlKeyword + "; }",
      "." + c + " .ace_keyword.ace_operator { color: " + palette.operatorKeyword + "; }",
      "." + c + " .ace_storage { color: " + palette.definitionKeyword + "; }",
      "." + c + " .ace_storage.ace_type { color: " + palette.typeName + "; }",

      "." + c + " .ace_constant { color: " + palette.constantName + "; }",
      "." + c + " .ace_constant.ace_numeric { color: " + palette.number + "; }",
      "." + c + " .ace_constant.ace_character { color: " + palette.character + "; }",
      "." + c + " .ace_constant.ace_character.ace_escape { color: " + palette.escapeChar + "; }",
      "." + c + " .ace_constant.ace_language { color: " + palette.nullLiteral + "; }",
      "." + c + " .ace_constant.ace_library { color: " + palette.urlLiteral + "; }",
      "." + c + " .ace_constant.ace_other { color: " + palette.atom + "; }",

      "." + c + " .ace_support { color: " + palette.standardName + "; }",
      "." + c + " .ace_support.ace_function { color: " + palette.functionName + "; }",
      "." + c + " .ace_support.ace_constant { color: " + palette.constantName + "; }",
      "." + c + " .ace_support.ace_class { color: " + palette.className + "; }",
      "." + c + " .ace_support.ace_type { color: " + palette.typeName + "; }",

      "." + c + " .ace_invalid { color: " + palette.background + "; background-color: " + palette.invalid + "; }",
      "." + c + " .ace_invalid.ace_illegal { color: " + palette.background + "; background-color: " + palette.invalid + "; }",
      "." + c + " .ace_invalid.ace_deprecated { color: " + palette.background + "; background-color: " + palette.changed + "; }",

      "." + c + " .ace_string { color: " + palette.string + "; }",
      "." + c + " .ace_string.ace_regexp { color: " + palette.regexp + "; }",

      "." + c + " .ace_comment { color: " + palette.comment + "; font-style: italic; }",
      "." + c + " .ace_comment.ace_doc { color: " + palette.docComment + "; }",
      "." + c + " .ace_comment.ace_doc.ace_tag { color: " + palette.tagName + "; }",

      "." + c + " .ace_variable { color: " + palette.variableName + "; }",
      "." + c + " .ace_variable.ace_parameter { color: " + palette.localVar + "; }",
      "." + c + " .ace_variable.ace_language { color: " + palette.selfKeyword + "; }",
      "." + c + " .ace_variable.ace_instance { color: " + palette.propertyName + "; }",
      "." + c + " .ace_variable.ace_class { color: " + palette.className + "; }",

      "." + c + " .ace_meta.ace_tag { color: " + palette.tagName + "; }",
      "." + c + " .ace_entity.ace_other.ace_attribute-name { color: " + palette.attributeName + "; }",
      "." + c + " .ace_entity.ace_name.ace_function { color: " + palette.functionName + "; }",
      "." + c + " .ace_entity.ace_name.ace_tag { color: " + palette.tagName + "; }",

      "." + c + " .ace_markup.ace_heading { color: " + palette.heading + "; }",
      "." + c + " .ace_markup.ace_list { color: " + palette.list + "; }",
      "." + c + " .ace_markup.ace_bold { font-weight: bold; color: " + palette.strong + "; }",
      "." + c + " .ace_markup.ace_italic { font-style: italic; color: " + palette.emphasis + "; }",
      "." + c + " .ace_markup.ace_underline { text-decoration: underline; }",
      "." + c + " .ace_markup.ace_strike { text-decoration: line-through; color: " + palette.strikethrough + "; }",
      "." + c + " .ace_markup.ace_quote { color: " + palette.quote + "; }",

      "." + c + " .ace_paren { color: " + palette.paren + "; }",
      "." + c + " .ace_punctuation { color: " + palette.punctuation + "; }",
      "." + c + " .ace_punctuation.ace_operator { color: " + palette.operator + "; }",

      "." + c + " .ace_function-arguments { color: " + palette.macroName + "; }",
      "." + c + " .ace_xml-pe { color: " + palette.processingInstruction + "; }",
    ].join("\n");
  }

  var aceRegistered = false;

  function registerAceTheme() {
    if (aceRegistered) return;
    if (typeof ace === "undefined" || typeof ace.define !== "function") return;


    ace.define(ACE_THEME_MODULE, ["require", "exports", "module"], function (aceRequire, aceExports) {
      aceExports.isDark = IS_DARK;
      aceExports.cssClass = ACE_CSS_CLASS;
      aceExports.cssText = buildAceCss();
      try {
        var dom = aceRequire("../lib/dom");
        dom.importCssString(aceExports.cssText, aceExports.cssClass, false);
      } catch (e) {
        var styleTag = document.createElement("style");
        styleTag.id = "theme-" + THEME_ID;
        styleTag.textContent = aceExports.cssText;
        document.head.appendChild(styleTag);
      }
    });
    aceRegistered = true;
  }

  function applyAceTheme() {
    try {
      var settings = acode.require("settings");
      if (settings && typeof settings.update === "function") {
        settings.update({ editorTheme: ACE_THEME_MODULE });
      }
    } catch (e) {
      /* settings API no disponible, se ignora */
    }
    if (
      typeof editorManager !== "undefined" &&
      editorManager.editor &&
      typeof editorManager.editor.setTheme === "function"
    ) {
      editorManager.editor.setTheme(ACE_THEME_MODULE);
    }
  }


  acode.setPluginInit(PLUGIN_ID, function () {
    var isCM6 = typeof editorManager !== "undefined" && !!editorManager.isCodeMirror;

    if (isCM6) {
      // Acode >= 1.12.3 (incluye v1.12.9): motor CodeMirror 6
      registerCM6Theme();
    } else {
      // Acode con motor Ace heredado
      registerAceTheme();
      try {
        var commands = acode.require("commands");
        commands.addCommand({
          name: THEME_ID + "-apply-ace",
          description: "Aplicar " + THEME_CAPTION + " (Ace)",
          exec: applyAceTheme,
        });
      } catch (e) {
        /* API de comandos no disponible en esta versión, se ignora */
      }
    }
  });

  acode.setPluginUnmount(PLUGIN_ID, function () {
    try {
      if (editorThemesApi && cm6Registered) {
        editorThemesApi.unregister(THEME_ID);
      }
    } catch (e) {
      /* se ignora */
    }
  });
})();
