class Reader{
static readJsonFile(path){
    const rawdata = fs.readFileSync(path);
    const explorers = JSON.parse(rawdata);
    return explorers
}
}