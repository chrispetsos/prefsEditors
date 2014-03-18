/*!
Cloud4all Preferences Management Tools

Copyright 2013 Astea
Copyright 2014 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {
    fluid.defaults("gpii.adjuster.speakTextSelector", {
        gradeNames: ["fluid.prefs.panel", "gpii.adjuster.singleSelectionWithKeyboard", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.screenReader": {
                "model.screenReader": "default"
            }
        },
        selectors: {
            headingLabel: ".gpiic-speakTextSelector-label",
            speakTextSelectorRow: ".gpiic-speakTextSelector-row",
            speakTextSelectorLabel: ".gpiic-speakTextSelector-selectionLabel",
            speakTextSelectorInput: ".gpiic-speakTextSelector-input",
            singleSelectionLabels: ".gpiic-speakTextSelector-selectionLabel"
        },
        protoTree: {
            expander: [
                {
                    type: "fluid.renderer.selection.inputs",
                    rowID: "speakTextSelectorRow",
                    labelID: "speakTextSelectorLabel",
                    inputID: "speakTextSelectorInput",
                    selectID: "speakTextSelector-radio",
                    tree: {
                        optionnames: "${{that}.options.strings.speakTextSelectorLabel}",
                        optionlist: "${{that}.options.controlValues.speakTextSelector}",
                        selection: ""
                    }
                }
            ],
            headingLabel: {messagekey: "speakTextLabel"}
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgBundle"
        },
        stringArrayIndex: {
            speakTextSelectorLabel: ["speakTextSelectorLabel-off", "speakTextSelectorLabel-screenReader", "speakTextSelectorLabel-textToSpeech"]
        },
        strings: {
            speakTextSelectorLabel: "{that}.stringBundle.speakTextSelectorLabel"
        },
        repeatingSelectors: ["speakTextSelectorRow"],
        controlValues: {
            speakTextSelector: ["off", "screenReader", "textToSpeech"]
        }
    });
    
    /*gpii.adjuster.speakTextSelector.style = function (labels, labelStrings, markup, speakTextSelectorSelection) {
        fluid.each(labels, function (label, index) {
            label = $(label);
            label.html(fluid.stringTemplate(markup, {
                speakTextSelectorLabel: labelStrings[index]
            }));
            label.attr("tooltip", labelStrings[index]);
        });
        
        // TODO: set this aria label 
        //container.attr("aria-labelledby", gpii.ariaUtility.getLabelId(heading));
    };*/
    
})(jQuery, fluid);
