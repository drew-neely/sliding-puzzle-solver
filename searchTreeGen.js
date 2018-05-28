var n = 3;
var start = [];
for(var i = 0; i < n; i++) {
	var row = [];
	for(var c = 0; c < n; c++) {
		row.push(n*i+c);
	}
	start.push(row);
}

function printBoard(board) {
	var maxLen = 0;
	var strs = [];
	for(var i = 0; i < n; i++) {
		var str = board[i].toString();
		strs.push(str);
		maxLen = str.length > maxLen ? str.length : maxLen;
	}
	console.log((new Array(maxLen + 1)).join("-"));
	for(var i = 0; i < n; i++) {
		console.log(strs[i]);
	}
	console.log((new Array(maxLen + 1)).join("-"));
}

printBoard(start);