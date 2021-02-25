/*
 * @Author: 33357
 * @Date: 2021-02-25 13:33:57
 * @LastEditTime: 2021-02-25 13:53:24
 * @LastEditors: 33357
 */

const startTime=1614230881;
const cycleTime=12*60*60;
const tradeTime=4*60*60;

const date=new Date()/1000;

function nextTradeTime() {

    return date-(date-startTime)%cycleTime+cycleTime;
}

function nextUntradeTime() {
    console.log(date-(date-startTime)%cycleTime)
    return date-(date-startTime)%cycleTime+tradeTime;
}

function isTradeTime(){
    return (date-startTime)%cycleTime<tradeTime;
}

console.log(startTime*1000,new Date(startTime*1000).toLocaleString())
console.log(nextTradeTime()*1000,new Date(nextTradeTime()*1000).toLocaleString())
console.log(nextUntradeTime()*1000,new Date(nextUntradeTime()*1000).toLocaleString())
console.log(isTradeTime())