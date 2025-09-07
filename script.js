function reverseIt(data) {
    if (typeof data === 'string' || typeof data === 'number') {
      const reversed = String(data).split('').reverse().join('');
      return typeof data === 'number' ? Number(reversed) : reversed;
    }
    return data;
  }

  console.log(reverseIt("hello"));    // "olleh"
console.log(reverseIt(12345));      // 54321