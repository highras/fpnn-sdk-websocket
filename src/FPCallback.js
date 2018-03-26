'use strict'

const FPConfig = require('./FPConfig');

class FPCallback{
    constructor(){
        this._cbMap = {};
        this._exMap = {};

        checkExpire.call(this);
    }

    addCallback(key, cb, timeout){
        if (!this._cbMap.hasOwnProperty(key)){
            this._cbMap[key] = cb;
        } 

        if (!timeout){
            timeout = FPConfig.SEND_TIMEOUT;
        }

        this._exMap[key] = timeout + Date.now();
    }

    removeCallback(key){
        delayRemoveCallback.call(self, key);
    }

    removeAll(){
        for (let key in this._cbMap){
            delayCallback.call(this, key, { code:FPConfig.ERROR_CODE.FPNN_EC_CORE_TIMEOUT, ex:'FPNN_EC_CORE_TIMEOUT' });
        }
    }

    findCallback(key){
        return this._cbMap[key];
    }

    callback(key, data){
        delayCallback.call(this, key, data);
    }
}

function checkExpire(){
    let self = this;
    setInterval(() => {
        for (let key in self._exMap){
            if (self._exMap[key] > Date.now()){
                continue;
            } 
            delayCallback.call(self, key, { code:FPConfig.ERROR_CODE.FPNN_EC_CORE_TIMEOUT, ex:'FPNN_EC_CORE_TIMEOUT' });
        }
    }, FPConfig.CHECK_CBS_INTERVAL);
}

function delayCallback(key, data){
    let self = this;
    setTimeout(() => {
        callback.call(self, key, data);
    }, 0);
}

function callback(key, data){
    let cb = this.findCallback(key);
    if (cb){
        removeCallback.call(this, key);
        cb(data);
    }
}

function delayRemoveCallback(key){
    let self = this;
    setTimeout(() => {
        removeCallback.call(self, key);
    }, 0);
}

function removeCallback(key){
    if (this._cbMap.hasOwnProperty(key)) delete this._cbMap[key];
    if (this._exMap.hasOwnProperty(key)) delete this._exMap[key];
}

module.exports = FPCallback