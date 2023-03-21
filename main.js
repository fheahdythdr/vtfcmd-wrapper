const { exec } = require('child_process');
const vtfpath = require('vtfcmd-binaries')

const VTFCmd = {};

VTFCmd.exec = function(str) {
    exec(`${vtfpath} ${str}`);
}

VTFCmd.convert = function(inputPath, outputPath) {
    const input = inputPath.replace(/\//g, '\\');;
    const output = outputPath.replace(/\//g, '\\');;
    this.exec(`-file ${input} -output ${output} -resize`)
}

module.exports = VTFCmd
