#!/usr/bin/env node

"use strict";

/**
* Verify the correctness of the chrome app to be published
*/

if (require.main == module) {
  console.log('verification script: ' + __filename);

  (function(verification_name, opts) {
    console.log('verifying :' + verification_name);

    var fs = require('fs');
    var manifest_json = JSON.parse(fs.readFileSync(opts.manifest_file_path));

    var maxNameLen = 45, nameLen = manifest_json.name.length;
    if (nameLen > maxNameLen) {
      throw SyntaxError(
        'The name field in manifest is too long: ' + nameLen +
        '. It exceeds maximum size limit of ' + maxNameLen + ' characters.'
      );
    }

    console.log('done with :' + verification_name);
  })('verify manifest.json', { manifest_file_path: 'manifest.json' });

} else {
  console.error('Calling this script via require is not supported');
}
