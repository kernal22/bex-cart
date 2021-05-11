const { createModel } = require("mongoose-gridfs");
import mongoose from "mongoose";

let Attachment: any;

mongoose.Promise = global.Promise;

mongoose.connection.on("open", function () {
  Attachment = createModel({
    modelName: "Attachment",
  });
});

const write = (fileStream: any, options: any, funCall: any) => {
  Attachment.write(options, fileStream, funCall);
};

const read = (id: string, funCall: any) => {
  Attachment.findById(id, funCall);
};

const unlink = (id: string, funCall: any) => {
  Attachment.unlink(id, funCall);
};

export { write, read, unlink };
