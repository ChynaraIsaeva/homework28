function reverseIt(data) {
    if (typeof data === 'string' || typeof data === 'number') {
      const reversed = String(data).split('').reverse().join('');
      return typeof data === 'number' ? Number(reversed) : reversed;
    }
    return data;
  }

  console.log(reverseIt("hello"));    // "olleh"
console.log(reverseIt(12345));      // 54321


function archersReady(archers) {
    return archers.length?archers.every(archer=>archer>=5):false;
}

archersReady([5, 6, 7, 8])
archersReady([5, 3, 6])