module.exports = function (RED) {
    "use strict";
    function RequireNode(n) {
        RED.nodes.createNode(this, n);
        this.field = n.field || "payload";
        this.fieldType = n.fieldType || "msg";

        var node = this;
        node.on("input", function (msg) {
            if (n.module) {
                var modulePath = n.module;
                if (modulePath.indexOf('/') > -1) {
                    var path = require('path');
                    modulePath = path.join('../..', modulePath);
                }

                var requireModule = require(modulePath);
                if (node.fieldType === 'msg') {
                    RED.util.setMessageProperty(msg, node.field, requireModule);
                }
                else if (node.fieldType === 'flow') {
                    node.context().flow.set(node.field, requireModule);
                }
                else if (node.fieldType === 'global') {
                    node.context().global.set(node.field, requireModule);
                }
            }

            node.send(msg);
        });
    }
    RED.nodes.registerType("require", RequireNode);
}