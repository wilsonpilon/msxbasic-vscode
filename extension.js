const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "msxbasic-vscode" is now active!');
	let createcmd = vscode.commands.registerCommand('extension.msxbasic.create', () => {
		vscode.window.showInformationMessage('Create Sample Project');
	});
	context.subscriptions.push(createcmd);
}

// this method is called when your extension is deactivated
function deactivate() {}

// eslint-disable-next-line no-undef
module.exports = {
	activate,
	deactivate
}