function rps(item) {
    const items = ['Rock', 'Paper', 'Scissors'];
    let CPUselect = items[Math.floor(Math.random() * items.length)];
    if (item == CPUselect) {
        return (`Player and CPU both selected ${item}. Friendship won.`)
    } else if (item == 'Rock' && CPUselect == 'Scissors' ||
        item == 'Scissors' && CPUselect == 'Paper' ||
        item == 'Paper' && CPUselect == 'Rock') {
        return (`Player selected ${item}. CPU selected ${CPUselect}. Player won.`);
    } else if (CPUselect == 'Rock' && item == 'Scissors' ||
        CPUselect == 'Scissors' && item == 'Paper' ||
        CPUselect == 'Paper' && item == 'Rock') {
        return (`Player selected ${item}. CPU selected ${CPUselect}. CPU won.`)
    }
}