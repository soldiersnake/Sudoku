import { boards } from "./Boards";

const validateSudoku = (board: number[][]): boolean => {
  // Verificar filas
  for (let i = 0; i < 9; i++) {
    const rowSet = new Set(board[i]);
    if (rowSet.size !== 9) return false;
  }

  // Verificar columnas
  for (let i = 0; i < 9; i++) {
    const colSet = new Set(board.map((row) => row[i]));
    if (colSet.size !== 9) return false;
  }

  // Verificar cuadrantes
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const boxSet = new Set();
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          boxSet.add(board[boxRow * 3 + i][boxCol * 3 + j]);
        }
      }
      if (boxSet.size !== 9) return false;
    }
  }

  return true;
}

// Probar cada tablero
for (const [index, board] of boards.entries()) {
  const isValid = validateSudoku(board);
  if (isValid) {
    console.log(`Tablero ${index + 1} es Correcto.`);
  } else {
    console.log(`Tablero ${index + 1} es Incorrecto.`);
  }
}
