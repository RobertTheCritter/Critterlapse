// ==UserScript==
// @name         Critterlapse V1 
// @namespace    https://play.boxcritters.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://play.boxcritters.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));

    }
    window.socket.on("joinRoom", async function (t) {
        if (t.RoomId == "port") {
            document.getElementById('stage').width = 2400;
            document.getElementById('stage').height = 480;
            document.getElementById('stage').style.width = null;
            document.getElementById('stage').style.height = null;
            await sleep(2500);
            socket.emit("click",{x:258,y:318})
            world.stage.menu.visible = false

        } else {
            document.getElementById('stage').width = 2400;
            document.getElementById('stage').height = 480;
            await sleep(2500);
            socket.on('disconnect', () => location.reload())
            window.socket.emit('joinRoom','port')
        }
    });
})();
