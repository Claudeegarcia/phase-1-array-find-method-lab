function superbowlWin(records){
    const record = records.find(record => record.result === "W");
    return record ? record.year : undefined
}


