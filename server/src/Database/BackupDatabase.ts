import envConfig from 'dotenv';
envConfig.config({ path: '../../../.env' });
import fs from "fs";
import cp from "child_process";


function createBackup() {
  const today = new Date();
  const dumpFileName = `${__dirname}/Backups/${today.toLocaleDateString(
    "tk-TM"
  )}.dump.sql`;

  const writeStream = fs.createWriteStream(dumpFileName);

  const dump = cp.spawn("mysqldump", [
    "-u",
    process.env.DB_USER,
    `-p${process.env.DB_PASS}`,
    "porkrindemporium",
  ]);

  dump.stdout
    .pipe(writeStream)
    .on("finish", function () {
      console.log("Completed");
    })
    .on("error", function (err) {
      console.log(err);
    });
}

createBackup();
