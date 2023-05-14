# Klient Storage

![badge-coverage](.github/badges/coverage.svg)

- [Introduction](#introduction)
- [Setup](#setup)
- [Usage](#usage)
- [Storage](#storage)
  * [Static](#static)
  * [Cookie](#cookie)
  * [LocalStorage](#localstorage)
  * [Custom Storage](#custom-storage)

&nbsp;

## Introduction

Klient storage is a factory used to build adapters whoses are able to persist a state (any value) somewhere.

## Setup

Install package with your favourite package manager :

```bash
# With NPM
$ npm install @klient/storage

# With YARN
$ yarn add @klient/storage
```

## Usage

```js
import Klient from '@klient/core';

//
// Create a storage adapter
//
const storage = StorageFactory.create('cookie', {
  name: 'test',
  path: '/'
});


//
// Write state
//
storage.write({ something: true });


//
// Read state
//
console.log(storage.read()); // Print { "something": true }
```

## Storage

A storage can be used to persist something. Every storage has its own options.
By default, all storage consider that persist an "undefined" value means to delete state.

### Static

The static storage uses only the language memory. On web application, this storage will be reset on every page refresh.

### Cookie

Store a state in a cookie.

*Options*

| Name       | Type     | Description                         | Required |
|------------|----------|:------------------------------------|:---------|
| name       | `string` | The cookie name.                    | Yes      |
| domain     | `string` | The cookie domain.                  | No       |
| path       | `string` | The cookie path.                    | No       |
| expiration | `number` | The cookie expiration (in seconds). | No       |

### LocalStorage

Store a state in a localStorage.

*Options*

| Name       | Type     | Description                         | Required |
|------------|----------|:------------------------------------|:---------|
| name       | `string` | The cookie name.                    | Yes      |

### Custom Storage

You can create the storage class you desired.
This class must contains methods `write`, `read` and `clear` as defined in example below.
The options (represented by a plain object) will be injected in constructor as single argument.

```js
import StorageFactory, { Storage } from '@klient/storage';

//
// We want to persist state in this variable
//
let state = undefined;


//
// Create your storage class
//
class CustomStorageAdapter extends Storage {
  write(value) {
    state = value;
  }

  read() {
    return state;
  }

  clear() {
    // 
    if (true === this.options.neverClear) {
      return;
    }

    state = undefined;
  }
}


//
// Register your storage adapter
//
StorageFactory.register('custom', CustomStorageAdapter);


//
// Use your storage
//
const customStorage = StorageFactory.create('custom', { neverClear: true });

customStorage.write({ test: true });
customStorage.clear();
console.log(customStorage.read()); // Print { "test": true }
```
