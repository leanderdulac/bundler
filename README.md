# nbundler
NodeJS private package manager

# Usage
See `test` directory for a complete example.

# Initialization
You must require `nbundler/setup` prior to including any dependency. This need to be done only once.

# Bundlefile.js
```js
bundle.name        = 'pagarme-api';
bundle.requirePath = 'lib';

bundle.dependency('pagarme-core', 'deps/pagarme-core');
```

## Require Path
Bundle automatically augments the require path with packages own directories. So, if you have the following structure:

```
/
  Nodebundle.js
  lib
    server.js
  deps
    Nodebundle.js
    pagarme-core
      lib
        transaction.js
```

You can do the following:

```
var Server = require('pagarme/server');
var Transaction = require('pagarme/transaction');
```

As the module do not manage files, you can use whatever you want to manage them(e.g.: Git).

