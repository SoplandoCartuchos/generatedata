import * as React from "react";
import { DataTypeUIExampleProps, DataTypeUIHelpProps, DataTypeUIOptionsProps } from '../../../../types/general';

export const state = {
	example: '',
	option: ''
};

export const Example = ({ coreI18n, i18n }: DataTypeUIExampleProps) => (
	<select>
		<option value="">{coreI18n.please_select}</option>
		<option value="1-Xxx-Xxx-xxxx">{i18n.example_1}</option>
		<option value="(Xxx) Xxx-xxxx">{i18n.example_2}</option>
		<option value="(01xxxx) xxxxx|(01xxx) xxxxxx|(01x1) xxx xxxx|(011x) xxx xxxx|(02x) xxxx xxxx|03xx xxx xxxx|055 xxxx xxxx|056 xxxx xxxx|070 xxxx xxxx|07624 xxxxxx|076 xxxx xxxx|07xxx xxxxxx|0800 xxx xxxx|08xx xxx xxxx|09xx xxx xxxx|(016977) xxxx|(01xxx) xxxxx|0500 xxxxxx|0800 xxxxxx|0800 1111|0845 46 4x">{i18n.uk}</option>
		<option value="0X xx xx xx xx">{i18n.france}</option>
		<option value="(0X) xxxx xxxx">{i18n.australia}</option>
		<option value="(0xx) xxxxxxxx|(0xxx) xxxxxxxx|(0xxxx) xxxxxxx|(03xxxx) xxxxxx">{i18n.germany}</option>
		<option value="0xx-xxx-xxxx">{i18n.japan}</option>
		<option value="1-Xxx-Xxx-xxxx|Xxx-xxxx">{i18n.different_formats}</option>
	</select>
);

export const Options = ({ data, onUpdate }: DataTypeUIOptionsProps) => (
	<input type="text" value={data.value} onChange={(e) => onUpdate({ value: e.target.value })} />
);

export const Help = ({ i18n }: DataTypeUIHelpProps) => (
	<>
		<p>
			{i18n.help_text1}
		</p>
		<p>
			{i18n.help_text2}
		</p>
		<p>
			{i18n.help_text3}
		</p>
	</>
);

// var _validate = function(rows) {
// 	var visibleProblemRows = [];
// 	var problemFields      = [];
// 	for (var i=0; i<rows.length; i++) {
// 		if ($("#dtOption_" + rows[i]).val() === "") {
// 			var visibleRowNum = generator.getVisibleRowOrderByRowNum(rows[i]);
// 			visibleProblemRows.push(visibleRowNum);
// 			problemFields.push($("#dtOption_" + rows[i]));
// 		}
// 	}
// 	var errors = [];
// 	if (visibleProblemRows.length) {
// 		errors.push({ els: problemFields, error: LANG.incomplete_fields + " <b>" + visibleProblemRows.join(", ") + "</b>"});
// 	}
// 	return errors;
// };