function terminalActive(currentApplication) {
  if (currentApplication === "iTerm" || currentApplication === "Terminal") {
    return true;
  } else {
    return false;
  }
}

function vimActive(currentApplication, mode) {
  if (terminalActive(currentApplication) && mode[0].lastIndexOf('vim', 0) === 0 || mode.lastIndexOf('vim', 0) === 0) {
    return true;
  } else {
    return false;
  }
}

function vimActiveNormalMode(currentApplication, mode) {
  if (terminalActive(currentApplication) && mode[0] === "vim-normal" || mode === "vim-normal") {
    return true;
  } else {
    return false;
  }
}

function vimActiveInsertMode(currentApplication, mode) {
  if (terminalActive(currentApplication) && mode[0] === "vim-insert" || mode === "vim-insert") {
    return true;
  } else {
    return false;
  }
}

Commands.extend("sage", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key(":");
    this.key("W");
    this.key("A");
    this.key("Return");
    this.stop();
  }
});

Commands.extend("trough", function(input) {
  if (vimActiveNormalMode(this.currentApplication(), Commands.mode)) {
    this.key("i");
  }
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("w", "Control");
    this.stop();
  }
})

Commands.extend("trail", function(input) {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("?");
    this.string(input.value);
    this.key("Return");
    this.stop();
  }
});

Commands.extend("crew", function(input) {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("/");
    this.string(input.value);
    this.key("Return");
    this.stop();
  }
});

Commands.extend("seltrail", function(input) {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("O");
    this.key("?");
    this.string(input.value);
    this.key("Return");
    this.stop();
  }
});

Commands.extend("selcrew", function(input) {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("/");
    this.string(input.value);
    this.key("/");
    this.key("E");
    this.key("Return");
    this.stop();
  }
});

Commands.extend("snatch", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("X");
    this.stop();
  }
});

Commands.extend("dizzle", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("U");
    this.stop();
  }
});

Commands.extend("rizzle", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("R", "Control");
    this.stop();
  }
});

Commands.extend("shabble", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("V", "Shift");
    this.key("<");
    this.stop();
  }
});

Commands.extend("shabber", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("V", "Shift");
    this.key(">");
    this.stop();
  }
});

Commands.extend("marneck", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("N");
    this.stop();
  }
});

Commands.extend("marpreev", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("N", "Shift");
    this.stop();
  }
});

Commands.extend("marco", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("/");
    this.stop();
  }
});

Commands.extend("shockoon", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("O");
    this.stop();
  }
});

Commands.extend("shockey", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("O", "Shift");
    this.stop();
  }
});

Commands.extend("doomway", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("G", "Shift");
    this.stop();
  }
});

Commands.extend("jeepway", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("G");
    this.key("G");
    this.stop();
  }
});

Commands.extend("shackle", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("V", "Control");
    this.stop();
  }
});

Commands.extend("snipple", function() {
  if (vimActiveNormalMode(this.currentApplication(), Commands.mode)) {
    this.key("I");
    this.key("Delete", "Command");
    this.stop();
  }
});

Commands.extend("snipper", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    if (vimActiveInsertMode(this.currentApplication(), Commands.mode)) {
      this.key("Escape");
      this.key("L");
    }
    this.key("D", "Shift");
    this.key("A", "Shift");
    this.stop();
  }
});

Commands.extend("jolt", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.string("yyp");
    this.stop();
  }
});

Commands.extend("derek", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("A", "Shift");
    this.key("Space");
    this.stop();
  }
});

Commands.extend("snipline", function() {
  if (vimActive(this.currentApplication(), Commands.mode)) {
    this.key("Escape");
    this.key("D");
    this.key("D");
    this.stop();
  }
});

Commands.extend("wordpreev", function(input) {
  /*
   * The reverse search (?) can take a count which would simplify the commands.
   * However, this will not work in cases where the backward search command has been
   * monkey patched to provide additional functionality. The implementation below
   * should work even under such edge cases.
   */
  if (vimActive(this.currentApplication(), Commands.mode)) {
    if (vimActiveInsertMode(this.currentApplication(),Commands.mode)) { this.key("Escape"); }
    this.string("?[a-zA-Z0-9_]\\+");
    this.key("Return");
    if (input) { for (i=0; i<input-1; i++) { this.key("N"); } }
    this.string(":nohl");
    this.key("Return");
    this.string("viw");
    this.stop();
  }
});

Commands.extend("wordneck", function(input) {
  /*
   * The forward search (/) can take a count which would simplify the commands.
   * However, this will not work in cases where the forward search command has been
   * monkey patched to provide additional functionality. The implementation below
   * should work even under such edge cases.
   */
  if (vimActive(this.currentApplication(), Commands.mode)) {
    if (vimActiveInsertMode(this.currentApplication(),Commands.mode)) { this.key("Escape"); }
    this.string("/[a-zA-Z0-9_]\\+");
    this.key("Return");
    if (input) { for (i=0; i<input-1; i++) { this.key("N"); } }
    this.string(":nohl");
    this.key("Return");
    this.string("viw");
    this.stop();
  }
});
