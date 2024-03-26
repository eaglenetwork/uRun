/// urun.js
var popupEnabled = true
document.addEventListener("keydown", function (e) {
	if (e.key == "~" && e.ctrlKey && e.shiftKey) {
		if (popupEnabled) {
			var t = window.open("", "_blank", "width=500,height=300");
			var e = t.document.createElement("iframe");
			(e.src = "//eaglenetwork.github.io/uRun/popup.html"),
				(e.style.cssText = "width:100%; height:100%; border:none;"),
				t.document.body.appendChild(e),
				t.document.title = "uRun",
				t.addEventListener("message", function (e) {
					e.data.toString().startsWith("execute:") && (eval(e.data.toString().replace("execute:", "")), t.close());
				});
		}
		else {
			eval(window.prompt("Code to run:"))
		}
	}
	if (e.key == "|" && e.ctrlKey) {
		if (popupEnabled) {
		popupEnabled = false
		alert("Popup disabled: manual mode triggered.")
	}}
});
