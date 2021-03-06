# Call prisma schema in multiple languages 
This is a sample of using prisma schema in multiple programming languages.

## demand
For example, the following case is envisioned:  
The web server functions will be handled by nodejs, and the batch processing from the database will be done once a day, with pyhton handling the aggregation work.  
In this case, `prisma-client-js` is used to connect from node, and `prisma-client-py` is used to connect from python.  
Wouldn't you be happy if you could share your schema in these cases?  

## Concept
### Folders for schema management (`/prisma`)
This folder is used to manage the schema itself, reflect the environment by migrate, and start the editing environment by studio.

### Folders to describe the actual process (`/node`, `/python`)
You can call `prisma generate` in each folder.  
In this case, since the generator to be used is different for each language, it is specified in the environment variable `$PRISMA_CLIENT`.  
The process is described in `update_schema.sh` in each folder.

## Folders and Files
### `/prisma`
It contains the following contents.
* The schema file itself.
* `package.json` to install the client for operation.
Mainly in this folder, we will edit the schema itself and `migrate`.

We will do setup with the following command.
```
cd ./prisma
npm install
npm run migrate
```

### `/node`
It contains the following contents.
* `package.json` for environment setup.
* A simple node.js example.

Set up the environment with `npm install`.
When updating the schema, run `npm run update_schema`.

### `/python`
It contains the following contents.
* `Pipfile` for environment setup.
* A simple python example.

`pipenv install` to set up the environment.
When you update your schema, run `pipenv run update_schema`.

## +1
The contents of each folder are independent except for `schema.prisma`!  
So it is possible (and recommended) to separate DB schema management and implementation aspects by using `git submodule` or similar.  
In that case, you will need to deal with the following
* Use `git submodule` or similar to be able to refer to the latest schema file.
* Change the referrer of the schema file referenced by the `update_schema` command.
