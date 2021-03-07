import React from 'react'
import LoanCalculator from "../component/LoanCalculator"

const MainPage = () => {
    return (
        <div style={{textAlign: "center"}}>
            <h1 style={{margin: 20}}>學貸計算機</h1>
            <LoanCalculator/>
            <div style={{margin: 20}}>
                <p> 一學期的貸款金額有一年的還款期 <br/> * 假設大學四年每學期皆有貸款，還款期限則為 8 年 （1 學年 2 學期）* </p>
                <p> 2020年 1 月之後，每月收入未達到 35,000 元，可向承貸銀行申請緩繳本金 <br/> * 1 次可以延後 1 年，最多可以申請 3 次 * </p>
                <p><a href="https://cpd.moe.gov.tw/articleInfo.php?id=3106">教育部資訊</a></p>
            </div>
        </div>
    )
}

export default MainPage