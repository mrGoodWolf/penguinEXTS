class cache {
  getInfo() {
    return {
      id: 'CACHE',
      name: 'caches for cookies!',
      blocks: [
        {
          opcode: 'setC',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set cache [DATA],[NAME]',
          arguments: {            
            DATA: {
              type: Scratch.ArgumentType.STRING
            },
            NAME: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'getC',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get cache [SFN]',
          arguments:{
            SFN: {
              type: Scratch.ArgumentType.String
            }
          }
        }
      ]
    };
  }

  setC() {
    localStorage["cache"] = args.DATA;
    var cacher = localStorage["cache"] || "defaultValue";
    if (cacher === args.DATA)
    {
      var good = "true";
    } else {
      var good = "false"
    } 
    return good;
  }
  getC() {
  var cacher = localStorage["cache"] || "defaultValue";
  return cacher;
}

var name = args.NAME;
Scratch.extensions.register(new CACHE());
