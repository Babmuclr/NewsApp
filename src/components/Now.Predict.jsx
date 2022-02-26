import "./ResultTable.css";
import React, { useEffect, useState } from 'react';

import { collection,  getDocs, query, orderBy, limit } from "firebase/firestore";

import { db } from '../index';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const NowPredict = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        async function fetchData() {
            const nowArticles = [];
            const museums = query(collection(db, "fxTweet"),orderBy("date","desc"),limit(1));
            console.log(museums)
            const querySnapshot = await getDocs(museums);
            console.log(querySnapshot)
            querySnapshot.forEach((doc) => {
                console.log(doc)
                nowArticles.push({
                    USDJPY: doc.data().USDJPY,
                    EURUSD: doc.data().EURUSD,
                    GBPUSD: doc.data().GBPUSD,
                    USDCAD: doc.data().USDCAD,
                    USDCHF: doc.data().USDCHF,
                    USDTRY: doc.data().USDCHF,
                    AUDUSD: doc.data().AUDUSD,
                    NZDUSD: doc.data().NZDUSD,
                })
            });
            setArticles(nowArticles);
        }
        fetchData();
      }, []);
    // ここでhooksを使える
    if (articles.length === 0) {
        return (
            <div className="loading">
                <p>ロード中</p>
            </div>
        )
    }else {
        return (
            <div className='table'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>予測</TableCell>
                        <TableCell align="right">USDJPY</TableCell>
                        <TableCell align="right">EURUSD</TableCell>
                        <TableCell align="right">GBPUSD</TableCell>
                        <TableCell align="right">USDCAD</TableCell>
                        <TableCell align="right">USDCHF</TableCell>
                        <TableCell align="right">USDTRY</TableCell>
                        <TableCell align="right">AUDUSD</TableCell>
                        <TableCell align="right">NZDUSD</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {articles.map((row) => (
                        <TableRow
                            key={row.date}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell align="right">{row.USDJPY}</TableCell>
                            <TableCell align="right">{row.EURUSD}</TableCell>
                            <TableCell align="right">{row.GBPUSD}</TableCell>
                            <TableCell align="right">{row.USDCAD}</TableCell>
                            <TableCell align="right">{row.USDCHF}</TableCell>
                            <TableCell align="right">{row.USDTRY}</TableCell>
                            <TableCell align="right">{row.AUDUSD}</TableCell>
                            <TableCell align="right">{row.NZDUSD}</TableCell>
                            <TableCell align="right">{row.all}</TableCell>
                            </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            </div>
        )
    }
}

export default NowPredict;