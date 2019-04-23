function createFile(data, textfile=null) {
  //Create the data blob to use in the file
  data = new Blob([data], {
    type: "text/plain"
  };

  //Prevents memory leaks with none empty files
  if (textfile !== null) {
    window.URL.revokeObjectURL(textfile);
  }
  
  //Create the file
  textfile = window.URL.createObjectURL(data);

  return textfile;
}
