/**
 * Example usage:
 * node scripts/extendTilesetIds.js tilesets/TwilioQuestObjects.json 1000
 *
 * Add 1000 empty tile objects to the image collection TwilioQuestObjects.
 *
 * Warning:
 * This only works on tilesets in the root tilesets folder because the image
 * path we're referencing is relative to that location.
 */

const fs = require("fs").promises;

const emptyTileObject = {
  id: 16,
  image: "./missing.png",
  imageheight: 32,
  imagewidth: 32,
};

async function getValidInputs() {
  const [, , filePath, tileCount] = process.argv;

  if (!filePath) {
    console.error("File path is required as first arg");
    return;
  }

  if (!tileCount) {
    console.error("Tile count to add is required as second arg");
    return;
  }

  let parsedTileCount;
  try {
    parsedTileCount = parseInt(tileCount, 10);
  } catch (err) {
    console.error(
      `Tile count "${tileCount}" is not a number. It must be an integer.\n---`
    );
    throw err;
  }

  let fileContents;
  try {
    fileContents = await fs.readFile(filePath, "utf-8");
  } catch (err) {
    console.error(
      `Error occurred trying to read the provided file path: "${filePath}"\n---`
    );
    throw err;
  }

  let fileJson;
  try {
    fileJson = JSON.parse(fileContents);
  } catch (err) {
    console.error(
      `Failed to parse file contents as JSON from file path: "${filePath}"\n---`
    );
    throw err;
  }

  return { filePath, fileJson, tileCount: parsedTileCount };
}

function last(array) {
  return array[array.length - 1];
}

function constructArray(constructorFn, length) {
  return new Array(length).fill().map((_, index) => constructorFn(index));
}

async function run() {
  const {
    filePath,
    tileCount,
    fileJson: initialTileset,
  } = await getValidInputs();

  const nextTileId = last(initialTileset.tiles).id + 1;

  const additionalTiles = constructArray((index) => {
    return {
      ...emptyTileObject,
      id: nextTileId + index,
    };
  }, tileCount);

  const newTiles = [...initialTileset.tiles, ...additionalTiles];

  const newTileset = {
    ...initialTileset,
    tiles: newTiles,
    tilecount: newTiles.length,
  };

  await fs.writeFile(filePath, JSON.stringify(newTileset));

  console.log(`Added ${tileCount} empty tiles to the tileset: "${filePath}"`);
}

run();
