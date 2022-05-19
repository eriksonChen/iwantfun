    $(document).ready(function () {
        $('#participants, #participants1, #participants2, #participants3, #participants4, #participants5, #participants6').multiInput({
            json: true,
            input: $('<div class="row inputElement">\n' +
                '<div class="form-group col">\n' +
                '<input class="form-control form-control-sm" name="tn_spec" type="text">\n' +
                '</div>\n' +
                '</div>\n'),
            limit: 10,
            onElementAdd: function (el, plugin) {
                console.log(plugin.elementCount);
            },
            onElementRemove: function (el, plugin) {
                console.log(plugin.elementCount);
            }
        });
    });