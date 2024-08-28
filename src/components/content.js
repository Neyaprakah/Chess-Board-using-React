import React from 'react';
import './style.css';
import { FaRegChessPawn } from "react-icons/fa6";
import { FaChessPawn } from "react-icons/fa6";
import { FaRegChessKing } from "react-icons/fa6";
import { FaChessKing } from "react-icons/fa6";
import { FaRegChessQueen } from "react-icons/fa6";
import { FaChessQueen } from "react-icons/fa6";
import { FaRegChessBishop } from "react-icons/fa6";
import { FaChessBishop } from "react-icons/fa6";
import { FaRegChessKnight } from "react-icons/fa6";
import { FaChessKnight } from "react-icons/fa6";
import { FaRegChessRook } from "react-icons/fa6";
import { FaChessRook } from "react-icons/fa6";

function Content(){
    return(
        <div className='content'>
            <div className='A'>
                <div className='brown'id='A1'><FaRegChessRook size={60} /></div>
                <div className='green'id='A2'><FaRegChessKnight size={60} /></div>
                <div className='brown'id='A3'><FaRegChessBishop size={60} /></div>
                <div className='green'id='A4'><FaRegChessKing size={60} /></div>
                <div className='brown'id='A5'><FaRegChessQueen size={60} /></div>
                <div className='green'id='A6'><FaRegChessBishop size={60} /></div>
                <div className='brown'id='A7'><FaRegChessKnight size={60} /></div>
                <div className='green'id='A8'><FaRegChessRook size={60} /></div>
            </div>
            <div className='B'>
                <div className='green'id='B1'><FaRegChessPawn size={60} /></div>
                <div className='brown'id='B2'><FaRegChessPawn size={60} /></div>
                <div className='green'id='B3'><FaRegChessPawn size={60} /></div>
                <div className='brown'id='B4'><FaRegChessPawn size={60} /></div>
                <div className='green'id='B5'><FaRegChessPawn size={60} /></div>
                <div className='brown'id='B6'><FaRegChessPawn size={60} /></div>
                <div className='green'id='B7'><FaRegChessPawn size={60} /></div>
                <div className='brown'id='B8'><FaRegChessPawn size={60} /></div>
            </div>
            <div className='C'>
                <div className='brown'id='C1'></div>
                <div className='green'id='C2'></div>
                <div className='brown'id='C3'></div>
                <div className='green'id='C4'></div>
                <div className='brown'id='C5'></div>
                <div className='green'id='C6'></div>
                <div className='brown'id='C7'></div>
                <div className='green'id='C8'></div>
            </div>
            <div className='D'>
                <div className='green'id='D1'></div>
                <div className='brown'id='D2'></div>
                <div className='green'id='D3'></div>
                <div className='brown'id='D4'></div>
                <div className='green'id='D5'></div>
                <div className='brown'id='D6'></div>
                <div className='green'id='D7'></div>
                <div className='brown'id='D8'></div>
            </div>
            <div className='E'>
                <div className='brown'id='E1'></div>
                <div className='green'id='E2'></div>
                <div className='brown'id='E3'></div>
                <div className='green'id='E4'></div>
                <div className='brown'id='E5'></div>
                <div className='green'id='E6'></div>
                <div className='brown'id='E7'></div>
                <div className='green'id='E8'></div>
            </div>
            <div className='F'>
                <div className='green'id='F1'></div>
                <div className='brown'id='F2'></div>
                <div className='green'id='F3'></div>
                <div className='brown'id='F4'></div>
                <div className='green'id='F5'></div>
                <div className='brown'id='F6'></div>
                <div className='green'id='F7'></div>
                <div className='brown'id='F8'></div>
            </div>
            <div className='G'>
                <div className='brown'id='G1'><FaChessPawn size={60} /></div>
                <div className='green'id='G2'><FaChessPawn size={60} /></div>
                <div className='brown'id='G3'><FaChessPawn size={60} /></div>
                <div className='green'id='G4'><FaChessPawn size={60} /></div>
                <div className='brown'id='G5'><FaChessPawn size={60} /></div>
                <div className='green'id='G6'><FaChessPawn size={60} /></div>
                <div className='brown'id='G7'><FaChessPawn size={60} /></div>
                <div className='green'id='G8'><FaChessPawn size={60} /></div>
            </div>
            <div className='H'>
                <div className='green'id='H1'><FaChessRook size={60} /></div>
                <div className='brown'id='H2'><FaChessKnight size={60} /></div>
                <div className='green'id='H3'><FaChessBishop size={60} /></div>
                <div className='brown'id='H4'><FaChessKing size={60} /></div>
                <div className='green'id='H5'><FaChessQueen size={60} /></div>
                <div className='brown'id='H6'><FaChessBishop size={60} /></div>
                <div className='green'id='H7'><FaChessKnight size={60} /></div>
                <div className='brown'id='H8'><FaChessRook size={60} /></div>
            </div>
        </div>
    )
}
export default Content;