process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const Oladele = process.stdin.read();

  if (Oladele) {
    process.stdout.write(`Your name is: ${Oladele}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});