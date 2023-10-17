const teman = {
  nama: ["almia", "anisa", "lira"],
  nim: [123, 456, 789]
};

function tampilkanTeman() {
  for (let i = 0; i < teman.nama.length; i++) {
    console.log(`nama : ${teman.nama[i]}`);
    console.log(`nim : ${teman.nim[i]}`);
    console.log(); 
  }
}

export { tampilkanTeman };
