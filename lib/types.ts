
// A cell that represents a cell in the battleship board.
export type Cell = {
    isHit: boolean;
    isMiss: boolean;
    isShip: boolean;
    isSunk: boolean;
}