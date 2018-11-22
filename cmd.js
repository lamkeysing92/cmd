function run() {
	var ieShell = new ActiveXObject ("WScript.Shell");
	ieShell.run("powershell -exec bypass");

}
run()