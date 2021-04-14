'use strict'

const FPClient = require('./fpnn/FPClient');
const FPConfig = require('./fpnn/FPConfig');
const FPEvent = require('./fpnn/FPEvent');
const FPSocket = require('./fpnn/FPSocket');
const FPPackage = require('./fpnn/FPPackage');
const FPCallback = require('./fpnn/FPCallback');
const FPProcessor = require('./fpnn/FPProcessor');
const FPError = require('./fpnn/FPError');

const BrowserImpl = require('./fpnn/platform/BrowserImpl');
const WechatImpl = require('./fpnn/platform/WechatImpl');

module.exports = {
	FPClient,
	FPConfig,
	FPEvent,
	FPSocket,
	FPPackage,
	FPCallback,
	FPProcessor,
	FPError,
	BrowserImpl,
	WechatImpl
};
