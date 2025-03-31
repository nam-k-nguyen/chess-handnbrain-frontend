import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useState } from "react";

function FullChessboard() {
    const [game, setGame] = useState(new Chess());
    let promotionPiece = null;

    function makeMove(move) {
        const result = game.move(move);
        setGame(new Chess(game.fen()));
        return result;
    }

    function handlePieceDrop(sourceSquare, targetSquare) {
        const move = makeMove({
            from: sourceSquare,
            to: targetSquare,
            promotion: promotionPiece
        });

        if (move === null) return false; 
        return true;
    }

    function handlePromotionPieceSelect(piece, promoteFrom, promoteTo) {
        promotionPiece = piece.slice(1).toLowerCase(); 
        return true;
    }

    return (
        <Chessboard
            id="BasicBoard"
            boardWidth={600}
            onPieceDrop={handlePieceDrop}
            onPromotionPieceSelect={handlePromotionPieceSelect}
            position={game.fen()}
        />
    );
}

export default FullChessboard;
